const screens = {
    login: document.getElementById('login-screen'),
    dashboard: document.getElementById('dashboard-screen'),
    proposals: document.getElementById('proposals-screen'),
    simulation: document.getElementById('simulation-screen')
};

const loginForm = document.getElementById('login-form');
const cpfInput = document.getElementById('cpf');
const pinInput = document.getElementById('pin');
const loginError = document.getElementById('login-error');

const welcomeMessage = document.getElementById('welcome-message');
const atrasadaValue = document.getElementById('atrasada-value');
const aVencerValue = document.getElementById('a-vencer-value');
const viewProposalsBtn = document.getElementById('view-proposals-btn');
const backToDashboardBtn = document.getElementById('back-to-dashboard-btn');

const proposalsList = document.getElementById('proposals-list');

const simulationTitle = document.getElementById('simulation-title');
const negotiatedValueSpan = document.getElementById('negotiated-value');
const entradaDisplayValue = document.getElementById('entrada-display-value');
const entradaParcelasInput = document.getElementById('entrada-parcelas');
const entradaParcelasDisplay = document.getElementById('entrada-parcelas-display');
const entradaParcelaValue = document.getElementById('entrada-parcela-value');
const saldoDisplayValue = document.getElementById('saldo-display-value');
const saldoParcelasInput = document.getElementById('saldo-parcelas');
const saldoParcelasDisplay = document.getElementById('saldo-parcelas-display');
const saldoParcelaValue = document.getElementById('saldo-parcela-value');
const saldoInfo = document.getElementById('saldo-info');
const confirmAgreementBtn = document.getElementById('confirm-agreement-btn');
const backToProposalsBtn = document.getElementById('back-to-proposals-btn');

let clientsData = { clients: [] }; // Initialize with empty array, will be fetched
let currentClient = null;
let currentProposal = null; // Stores the selected debt type and its negotiation details

// Helper functions
function showScreen(screenName) {
    for (let key in screens) {
        if(screens[key]) screens[key].classList.remove('active');
    }
    if(screens[screenName]) screens[screenName].classList.add('active');
}

function formatCurrency(value) {
    const numericValue = parseFloat(value);
    if (isNaN(numericValue)) {
        return "R$ 0,00";
    }
    return numericValue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function calculateInstallment(principal, rate, periods) {
    const numericPrincipal = parseFloat(principal);
    const numericRate = parseFloat(rate);
    const numericPeriods = parseInt(periods);

    if (isNaN(numericPrincipal) || isNaN(numericRate) || isNaN(numericPeriods) || numericPeriods <= 0) {
        return 0;
    }

    if (numericRate === 0) {
        return numericPrincipal / numericPeriods;
    }
    const i = numericRate;
    const numerator = numericPrincipal * i * Math.pow(1 + i, numericPeriods);
    const denominator = Math.pow(1 + i, numericPeriods) - 1;
    
    if (denominator === 0) {
        return numericPrincipal / numericPeriods;
    }
    return numerator / denominator;
}

// Fetch client data
async function fetchClientsData() {
    try {
        const response = await fetch('clients_data.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        clientsData = await response.json();
    } catch (error) {
        console.error("Could not fetch clients data:", error);
        loginError.textContent = "Erro ao carregar dados dos clientes. Tente novamente mais tarde.";
    }
}

// Initial data fetch
fetchClientsData();

// Login Logic
cpfInput.addEventListener('input', (e) => {
    let value = e.target.value.replace(/\D/g, ''); // Remove todos os não-dígitos
    if (value.length > 9) {
        value = value.replace(/^(\d{3})(\d{3})(\d{3})(\d{2}).*/, '$1.$2.$3-$4');
    } else if (value.length > 6) {
        value = value.replace(/^(\d{3})(\d{3})(\d{3})/, '$1.$2.$3');
    } else if (value.length > 3) {
        value = value.replace(/^(\d{3})(\d{3})/, '$1.$2');
    }
    e.target.value = value;
});

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const cpfRaw = cpfInput.value.replace(/\D/g, ''); // CPF sem formatação
    const pin = pinInput.value;

    currentClient = clientsData.clients.find(client => {
        const clientCpfRaw = client.cpf.replace(/\D/g, ''); // Normaliza CPF do dado
        return clientCpfRaw === cpfRaw && client.pin === pin;
    });

    if (currentClient) {
        loginError.textContent = '';
        renderDashboard();
        showScreen('dashboard');
    } else {
        loginError.textContent = 'CPF ou PIN incorretos. Tente novamente.';
    }
});

function renderDashboard() {
    welcomeMessage.textContent = `Olá, ${currentClient.name.split(' ')[0]}!`;

    const atrasadaVal = currentClient.debts.atrasada ? currentClient.debts.atrasada.value : 0;
    // Check for specific overdue debts for Jaqueline
    const atrasadaJaquelineVal = currentClient.debts.atrasada_jaqueline ? currentClient.debts.atrasada_jaqueline.value : 0;
    const atrasadaBrunoConjuntaVal = currentClient.debts.atrasada_bruno_conjunta ? currentClient.debts.atrasada_bruno_conjunta.value : 0;
    
    // Sum all overdue debts for display in the dashboard card
    const totalAtrasada = atrasadaVal + atrasadaJaquelineVal + atrasadaBrunoConjuntaVal;

    const aVencerVal = currentClient.debts.a_vencer ? currentClient.debts.a_vencer.value : 0;
    const vencendoHojeVal = currentClient.debts.vencendo_hoje ? currentClient.debts.vencendo_hoje.value : 0;
    const totalAVencer = aVencerVal + vencendoHojeVal;

    atrasadaValue.textContent = formatCurrency(totalAtrasada);
    aVencerValue.textContent = formatCurrency(totalAVencer);
}

viewProposalsBtn.addEventListener('click', () => {
    renderProposals();
    showScreen('proposals');
});

backToDashboardBtn.addEventListener('click', () => {
    showScreen('dashboard');
});

function renderProposals() {
    proposalsList.innerHTML = ''; // Clear previous proposals

    const debtTypes = {
        atrasada: 'Dívida Atrasada',
        a_vencer: 'Dívida a Vencer',
        total: 'Dívida Total',
        atrasada_jaqueline: 'Dívida Atrasada (Individual)',
        atrasada_bruno_conjunta: 'Dívida Atrasada (Conjunta com Bruno)'
    };

    for (const debtKey in currentClient.debts) {
        const debt = currentClient.debts[debtKey];
        if (debt.negotiation) { // Only show proposals for debts with negotiation terms
            const card = document.createElement('div');
            card.classList.add('proposal-card', debtKey); // Add specific class for styling
            
            const title = document.createElement('h3');
            title.textContent = debtTypes[debtKey] || debtKey.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase()); // Nicer title

            const value = document.createElement('p');
            value.textContent = `Valor Original: ${formatCurrency(debt.value)}`;

            let entryDetails = '';
            if (debt.negotiation.entrada_minima > 0) {
                entryDetails = `Entrada Mínima: ${formatCurrency(debt.negotiation.entrada_minima)} (até ${debt.negotiation.parcelamento_entrada_max}x)`;
            } else {
                entryDetails = 'Não exige entrada.';
            }

            const terms = document.createElement('p');
            terms.innerHTML = `
                ${entryDetails}<br>
                Parcelamento Saldo: até ${debt.negotiation.parcelamento_saldo_max}x<br>
                Parcela Mínima: ${formatCurrency(debt.negotiation.parcela_minima_saldo)}
            `;

            const selectButton = document.createElement('button');
            selectButton.textContent = 'Simular Proposta';
            selectButton.addEventListener('click', () => {
                currentProposal = {
                    type: debtKey,
                    value: debt.value,
                    negotiation: debt.negotiation
                };
                renderSimulationScreen();
                showScreen('simulation');
            });

            card.append(title, value, terms, selectButton);
            proposalsList.appendChild(card);
        }
    }
}

function renderSimulationScreen() {
    simulationTitle.textContent = `Simular Renegociação - ${currentProposal.type.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}`;
    negotiatedValueSpan.textContent = formatCurrency(currentProposal.value);

    // Set max for entry and saldo parcel sliders
    entradaParcelasInput.max = currentProposal.negotiation.parcelamento_entrada_max;
    entradaParcelasInput.value = 1; // Reset to 1x
    entradaParcelasDisplay.textContent = '1x';

    saldoParcelasInput.max = currentProposal.negotiation.parcelamento_saldo_max;
    saldoParcelasInput.value = 1; // Reset to 1x
    saldoParcelasDisplay.textContent = '1x';

    updateSimulationValues(); // Initial calculation
}

function updateSimulationValues() {
    const entradaMinima = currentProposal.negotiation.entrada_minima;
    const taxaEntrada = currentProposal.negotiation.taxa_entrada;
    const taxaSaldo = currentProposal.negotiation.taxa_saldo;
    const parcelaMinimaSaldo = currentProposal.negotiation.parcela_minima_saldo;
    
    // Entrada calculation
    let entradaAtual = entradaMinima; // Assuming the user will pay at least the minimum entry
    const numParcelasEntrada = parseInt(entradaParcelasInput.value);
    entradaDisplayValue.textContent = formatCurrency(entradaAtual);
    entradaParcelasDisplay.textContent = `${numParcelasEntrada}x`;

    const valorParcelaEntrada = calculateInstallment(entradaAtual, taxaEntrada, numParcelasEntrada);
    entradaParcelaValue.textContent = formatCurrency(valorParcelaEntrada);

    // Saldo restante calculation
    let saldoRestante = currentProposal.value - entradaAtual;
    if (saldoRestante < 0) saldoRestante = 0; // Ensure saldo is not negative

    saldoDisplayValue.textContent = formatCurrency(saldoRestante);
    const numParcelasSaldo = parseInt(saldoParcelasInput.value);
    saldoParcelasDisplay.textContent = `${numParcelasSaldo}x`;

    const valorParcelaSaldo = calculateInstallment(saldoRestante, taxaSaldo, numParcelasSaldo);
    saldoParcelaValue.textContent = formatCurrency(valorParcelaSaldo);

    // Validate minimum installment for remaining balance
    if (valorParcelaSaldo < parcelaMinimaSaldo && saldoRestante > 0) {
        saldoInfo.textContent = `A parcela mínima para o saldo restante é ${formatCurrency(parcelaMinimaSaldo)}. Ajuste o número de parcelas.`;
        saldoInfo.style.display = 'block';
        confirmAgreementBtn.disabled = true;
    } else {
        saldoInfo.style.display = 'none';
        confirmAgreementBtn.disabled = false;
    }
}

entradaParcelasInput.addEventListener('input', updateSimulationValues);
saldoParcelasInput.addEventListener('input', updateSimulationValues);


confirmAgreementBtn.addEventListener('click', () => {
    const entradaMinima = currentProposal.negotiation.entrada_minima;
    const numParcelasEntrada = parseInt(entradaParcelasInput.value);
    const valorParcelaEntrada = parseFloat(entradaParcelaValue.textContent.replace('R$', '').replace('.', '').replace(',', '.'));
    
    const saldoRestante = parseFloat(saldoDisplayValue.textContent.replace('R$', '').replace('.', '').replace(',', '.'));
    const numParcelasSaldo = parseInt(saldoParcelasInput.value);
    const valorParcelaSaldo = parseFloat(saldoParcelaValue.textContent.replace('R$', '').replace('.', '').replace(',', '.'));

    let message = `Olá! Meu nome é ${currentClient.name}.%0A`;
    message += `Gostaria de formalizar a negociação da minha ${currentProposal.type.replace(/_/g, ' ')}.%0A%0A`;
    message += `*Detalhes da Proposta:*%0A`;
    message += `Valor Original da Dívida: ${formatCurrency(currentProposal.value)}%0A`;
    message += `Valor da Entrada: ${formatCurrency(entradaMinima)} em ${numParcelasEntrada}x de ${formatCurrency(valorParcelaEntrada)}%0A`;
    message += `Saldo Restante: ${formatCurrency(saldoRestante)} em ${numParcelasSaldo}x de ${formatCurrency(valorParcelaSaldo)}%0A%0A`;
    message += `Por favor, me ajude a finalizar o acordo.`;

    const whatsappUrl = `https://wa.me/?text=${message}`;
    window.open(whatsappUrl, '_blank');
});

backToProposalsBtn.addEventListener('click', () => {
    showScreen('proposals');
});

// Initial screen load
showScreen('login');
