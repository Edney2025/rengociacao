const clientsData = {
    "clients": [
      {
        "name": "Amanda Lopes Inocêncio",
        "cpf": "097.342.559-83",
        "pin": "0983",
        "debts": {
          "atrasada": {
            "value": 4289.06,
            "negotiation": {
              "entrada_minima": 1500.00,
              "parcelamento_entrada_max": 6,
              "taxa_entrada": 0.005,
              "parcelamento_saldo_max": 96,
              "parcela_minima_saldo": 120.00,
              "taxa_saldo": 0.009
            }
          },
          "a_vencer": {
            "value": 4193.43,
            "negotiation": {
              "entrada_minima": 1000.00,
              "parcelamento_entrada_max": 6,
              "taxa_entrada": 0.005,
              "parcelamento_saldo_max": 96,
              "parcela_minima_saldo": 85.00,
              "taxa_saldo": 0.005
            }
          },
          "total": {
            "value": 8482.49,
            "negotiation": {
              "entrada_minima": 3000.00,
              "parcelamento_entrada_max": 8,
              "taxa_entrada": 0.005,
              "parcelamento_saldo_max": 96,
              "parcela_minima_saldo": 135.00,
              "taxa_saldo": 0.001
            }
          }
        }
      },
      {
        "name": "Maicon Pereira",
        "cpf": "111.919.319-27",
        "pin": "1927", // Corrigido para 1927
        "debts": {
          "atrasada": {
            "value": 2474.08,
            "negotiation": {
              "entrada_minima": 1500.00,
              "parcelamento_entrada_max": 6,
              "taxa_entrada": 0.005,
              "parcelamento_saldo_max": 96,
              "parcela_minima_saldo": 100.00,
              "taxa_saldo": 0.005
            }
          },
          "a_vencer": {
            "value": 7515.00,
            "negotiation": {
              "entrada_minima": 3500.00,
              "parcelamento_entrada_max": 7,
              "taxa_entrada": 0.005,
              "parcelamento_saldo_max": 96,
              "parcela_minima_saldo": 185.00,
              "taxa_saldo": 0.009
            }
          },
          "total": {
            "value": 9989.08,
            "negotiation": {
              "entrada_minima": 4500.00,
              "parcelamento_entrada_max": 10,
              "taxa_entrada": 0.005,
              "parcelamento_saldo_max": 96,
              "parcela_minima_saldo": 175.00,
              "taxa_saldo": 0.009
            }
          }
        }
      },
      {
        "name": "Rosangela Santos",
        "cpf": "111.222.333-44",
        "pin": "3344",
        "debts": {
          "atrasada": {
            "value": 1349.40,
            "negotiation": {
              "entrada_minima": 500.00,
              "parcelamento_entrada_max": 5,
              "taxa_entrada": 0.009,
              "parcelamento_saldo_max": 96,
              "parcela_minima_saldo": 85.00,
              "taxa_saldo": 0.02
            }
          }
        }
      },
      {
        "name": "Alexandra Inocencio",
        "cpf": "079.033.129-28",
        "pin": "2928", // Corrigido para 2928
        "debts": {
          "atrasada": {
            "value": 4131.87
          },
          "a_vencer": {
            "value": 2456.60
          },
          "total": {
            "value": 6588.47,
            "negotiation": {
              "entrada_minima": 1400.00,
              "parcelamento_entrada_max": 7,
              "taxa_entrada": 0.000,
              "parcelamento_saldo_max": 96,
              "parcela_minima_saldo": 85.00,
              "taxa_saldo": 0.001
            }
          }
        }
      },
      {
        "name": "Angel Antonio",
        "cpf": "333.444.555-66", // Corrigido CPF para o original, se for o caso
        "pin": "5566", // Corrigido para 5566
        "debts": {
          "atrasada": {
            "value": 1948.87
          },
          "a_vencer": {
            "value": 10580.00
          },
          "total": {
            "value": 12528.78,
            "negotiation": {
              "entrada_minima": 3000.00,
              "parcelamento_entrada_max": 6, // Voltou para 6, como no JSON original
              "taxa_entrada": 0.000,
              "parcelamento_saldo_max": 96,
              "parcela_minima_saldo": 150.00, // Voltou para 150.00
              "taxa_saldo": 0.001
            }
          }
        }
      },
      {
        "name": "Jordan", // Nome original "Jordan"
        "cpf": "222.333.444-55", // CPF original
        "pin": "4455", // PIN original
        "debts": {
          "atrasada": {
            "value": 2144.25
          },
          "a_vencer": {
            "value": 555.00
          },
          "total": {
            "value": 2699.26,
            "negotiation": {
              "entrada_minima": 1000.00,
              "parcelamento_entrada_max": 5,
              "taxa_entrada": 0.005,
              "parcelamento_saldo_max": 96,
              "parcela_minima_saldo": 85.00,
              "taxa_saldo": 0.03
            }
          }
        }
      },
      {
        "name": "Jaqueline Rodrigues", // Nome original "Jaqueline Rodrigues"
        "cpf": "094.164.999-78",
        "pin": "0978", // Corrigido para 0978
        "debts": {
          "atrasada_jaqueline": { // Dívida individual da Jaqueline
            "value": 2350.00, // Valor atualizado
            "negotiation": {
              "entrada_minima": 1350.00,
              "parcelamento_entrada_max": 10,
              "taxa_entrada": 0.005,
              "parcelamento_saldo_max": 96,
              "parcela_minima_saldo": 65.00,
              "taxa_saldo": 0.05
            }
          },
          "atrasada_bruno_conjunta": { // Dívida do Bruno, acessível via Jaqueline
            "value": 3327.10,
            "negotiation": {
              "entrada_minima": 1800.00,
              "parcelamento_entrada_max": 8,
              "taxa_entrada": 0.005,
              "parcelamento_saldo_max": 96,
              "parcela_minima_saldo": 100.00,
              "taxa_saldo": 0.05
            }
          }
        }
      },
      {
        "name": "Idaiana Teixeira Guimarães",
        "cpf": "078.701.689-63",
        "pin": "8963",
        "debts": {
          "atrasada": {
            "value": 455.54,
            "negotiation": {
              "entrada_minima": 200.00,
              "parcelamento_entrada_max": 1,
              "taxa_entrada": 0.000,
              "parcelamento_saldo_max": 96,
              "parcela_minima_saldo": 50.00,
              "taxa_saldo": 0.009
            }
          }
        }
      },
      {
        "name": "Carlos Augusto",
        "cpf": "449.986.067-92", // Corrigido para formato padrão
        "pin": "4492",
        "debts": {
          "atrasada": {
            "value": 130.00,
            "notification_advogado": 150.00
          },
          "total": {
            "value": 280.00,
            "negotiation": {
              "entrada_minima": 80.00,
              "parcelamento_entrada_max": 5,
              "taxa_entrada": 0.005,
              "parcelamento_saldo_max": 96,
              "parcela_minima_saldo": 25.00,
              "taxa_saldo": 0.09
            }
          }
        }
      },
      {
        "name": "Wilian Tiago dos Santos Silva",
        "cpf": "082.913.159-06",
        "pin": "5906",
        "debts": {
          "atrasada": {
            "value": 350.00,
            "notification_advogado": 150.00
          },
          "total": {
            "value": 500.00,
            "negotiation": {
              "entrada_minima": 150.00,
              "parcelamento_entrada_max": 2,
              "taxa_entrada": 0.005,
              "parcelamento_saldo_max": 96,
              "parcela_minima_saldo": 25.00,
              "taxa_saldo": 0.09
            }
          }
        }
      },
      {
        "name": "Paulo Ricardo de Oliveira Correira",
        "cpf": "079.010.139-40",
        "pin": "3940",
        "debts": {
          "atrasada": {
            "value": 225.00,
            "notification_advogado": 150.00
          },
          "total": {
            "value": 375.00,
            "negotiation": {
              "entrada_minima": 150.00,
              "parcelamento_entrada_max": 2,
              "taxa_entrada": 0.005,
              "parcelamento_saldo_max": 96,
              "parcela_minima_saldo": 25.00,
              "taxa_saldo": 0.09
            }
          }
        }
      },
      {
        "name": "Monica Riquelme",
        "cpf": "707.604.741-17",
        "pin": "4117",
        "debts": {
          "atrasada": {
            "value": 835.69,
            "negotiation": {
              "entrada_minima": 300.00,
              "parcelamento_entrada_max": 3,
              "taxa_entrada": 0.005,
              "parcelamento_saldo_max": 96,
              "parcela_minima_saldo": 50.00,
              "taxa_saldo": 0.09
            }
          }
        }
      },
      {
        "name": "Marina Srivan",
        "cpf": "078.900.679-09",
        "pin": "7909",
        "debts": {
          "atrasada": {
            "value": 1248.56
          },
          "vencendo_hoje": {
            "value": 250.00
          },
          "a_vencer": {
            "value": 4110.00
          },
          "total": {
            "value": 5608.56,
            "negotiation": {
              "entrada_minima": 2000.00,
              "parcelamento_entrada_max": 4,
              "taxa_entrada": 0.000,
              "parcelamento_saldo_max": 96,
              "parcela_minima_saldo": 100.00,
              "taxa_saldo": 0.001
            }
          }
        }
      },
      {
        "name": "Luciano Oliveira da Costa",
        "cpf": "717.954.052-87",
        "pin": "5287",
        "debts": {
          "atrasada": {
            "value": 537.63,
            "negotiation": {
              "entrada_minima": 300.00,
              "parcelamento_entrada_max": 2,
              "taxa_entrada": 0.005,
              "parcelamento_saldo_max": 96,
              "parcela_minima_saldo": 75.00,
              "taxa_saldo": 0.02
            }
          }
        }
      },
      {
        "name": "Bruna Pereira do Santos de Oliveira",
        "cpf": "084.371.249-05",
        "pin": "0805",
        "debts": {
          "a_vencer": {
            "value": 11313.60
          },
          "vencendo_hoje": {
            "date": "15/09",
            "value": 1565.00,
            "detalhes": {
              "parcelas": [
                { "quantidade": 2, "valor_unitario": 637.50 },
                { "quantidade": 2, "valor_unitario": 110.00 },
                { "quantidade": 1, "valor_unitario": 70.00 }
              ]
            }
          },
          "total": {
            "value": 11313.60,
            "negotiation": {
              "entrada_minima": 3000.00,
              "parcelamento_entrada_max": 3,
              "taxa_entrada": 0.005,
              "parcelamento_saldo_max": 96,
              "parcela_minima_saldo": 150.00,
              "taxa_saldo": 0.009
            }
          }
        }
      }
    ]
};

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
const entradaValueSpan = document.getElementById('entrada-value');
const entradaParcelasInput = document.getElementById('entrada-parcelas');
const entradaParcelasDisplay = document.getElementById('entrada-parcelas-display');
const entradaParcelaValue = document.getElementById('entrada-parcela-value');
const saldoValueSpan = document.getElementById('saldo-value');
const saldoParcelasInput = document.getElementById('saldo-parcelas');
const saldoParcelasDisplay = document.getElementById('saldo-parcelas-display');
const saldoParcelaValue = document.getElementById('saldo-parcela-value');
const saldoInfo = document.getElementById('saldo-info');
const confirmAgreementBtn = document.getElementById('confirm-agreement-btn');
const backToProposalsBtn = document.getElementById('back-to-proposals-btn');

let currentClient = null;
let currentProposal = null;

// Helper functions
function showScreen(screenName) {
    for (let key in screens) {
        if(screens[key]) screens[key].classList.remove('active');
    }
    if(screens[screenName]) screens[screenName].classList.add('active');
}

function formatCurrency(value) {
    // Garante que o valor é um número para formatar corretamente
    const numericValue = parseFloat(value);
    if (isNaN(numericValue)) {
        return "R$ 0,00"; // Ou qualquer valor padrão para inválidos
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
    
    if (denominator === 0) { // Evita divisão por zero se periods for 0 ou 1 e i for muito pequeno
        return numericPrincipal / numericPeriods;
    }
    return numerator / denominator;
}


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
        loginError
