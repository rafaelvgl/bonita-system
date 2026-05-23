// ═══════════════════════════════════════════════════════════
//  config.js — Bonità Pizzaria · Sistema de Gestão v2
//  Compartilhado por: index.html, pizza-metrics.html, estoque.html
//
//  ⚠️  ATENÇÃO: não suba este arquivo no GitHub com o token
//  real preenchido. Use um .gitignore ou substitua por
//  variáveis de ambiente em produção.
// ═══════════════════════════════════════════════════════════

const BONITA_CONFIG = {

  // ── SAIPOS · API DE DADOS ───────────────────────────────
  // Documentação: https://saipos-data-api.readme.io
  saipos: {
    gsUrl:   'https://script.google.com/macros/s/AKfycbxG901rjjQiN50YDNWmScqH2hshcsKgLO8LgqyD08yvwURlrkDO3fW0v1HIeVC0bnoKlw/exec',
    token:   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXkiOiI2YWE1MmQ2OC0zZWZiLTZlZWYtODYyOS00ZTNmMWU2MDJmNTgiLCJpYXQiOjE3NzkyODY2Nzh9.1XkX4VYKQT15YgNbbuTx-0q-PdaFLAz_I7ggPUmyjCI',
    storeId: '76472',
    // URL base legacy (mantida para compatibilidade)
    baseUrl: 'https://data.saipos.io/v1',
  },

  // ── METAS OPERACIONAIS ──────────────────────────────────
  metas: {
    tempoCozinhaMin: 20,   // Montagem (minutos)
    tempoEntregaMin: 15,   // Saiu para entrega (minutos)
    tempoTotalSLA:   35,   // Tempo total meta (minutos)
    slaMaximo:       45,   // SLA crítico — acima disso é crítico
  },

  // ── ENTREGADORES ────────────────────────────────────────
  // Mapa: telefone (login app Saipos Entregador) → nome real
  // Atualizar quando contratar/demitir motoboys
  entregadores: {
    '18991627196': 'Kaiki',
    '18997521998': 'André',
    '18997685948': 'João V. Hansen',
    '18998259966': 'Roberta Rodrigues',
    '44988436823': 'Rafael Vendrame',
  },

  // ── IDENTIDADE DA MARCA ─────────────────────────────────
  brand: {
    nome:   'Bonità Pizzaria',
    cidade: 'Penápolis, SP',
    cnpj:   '33.248.830/0001-91',
    cores: {
      red:   '#D6453D',
      green: '#024D34',
      cream: '#FFF0D6',
      blue:  '#A3CBD9',
    },
  },

  // ── FORNECEDORES ────────────────────────────────────────
  fornecedores: {
    secos:      ['Bispo', 'Mega G'],
    hortifruti: ['Mercado local'],
  },

  // ── ESTOQUE · PARÂMETROS ────────────────────────────────
  estoque: {
    alertaEstoqueMinimo: true,   // exibe alerta quando abaixo do mínimo
    diasProjecao:        7,      // dias para projeção de compras
    unidadesPadrao:      ['kg', 'g', 'L', 'ml', 'un', 'pct', 'cx'],
  },

};

// ── Expõe globalmente para todos os módulos ─────────────
window.BONITA_CONFIG = BONITA_CONFIG;

// ── Atalhos convenientes ────────────────────────────────
window.BC = BONITA_CONFIG;
