// ═══════════════════════════════════════════════════════════
//  config.js — Bonità Pizzaria · Sistema de Gestão
//  Edite este arquivo antes de usar qualquer ferramenta.
//  NÃO comite tokens reais no GitHub — use variáveis de
//  ambiente ou um arquivo .env em produção.
// ═══════════════════════════════════════════════════════════

const BONITA_CONFIG = {

  // ── SAIPOS / GOOGLE APPS SCRIPT ────────────────────────
  // gsUrl  → URL do proxy Google Apps Script (usado pelo PizzaMetrics e Estoque)
  // token  → Bearer token Saipos (sem a palavra "Bearer")
  // storeId→ ID da loja no Saipos
  saipos: {
    gsUrl:   'https://script.google.com/macros/s/AKfycbxG901rjjQiN50YDNWmScqH2hshcsKgLO8LgqyD08yvwURlrkDO3fW0v1HIeVC0bnoKlw/exec',
    token:   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXkiOiI2YWE1MmQ2OC0zZWZiLTZlZWYtODYyOS00ZTNmMWU2MDJmNTgiLCJpYXQiOjE3NzkyODY2Nzh9.1XkX4VYKQT15YgNbbuTx-0q-PdaFLAz_I7ggPUmyjCI',
    storeId: '76472',
    // Aliases para compatibilidade com módulos antigos
    get baseUrl(){ return this.gsUrl; },
    get proxyUrl(){ return this.gsUrl; },
    get url(){ return 'https://data.saipos.io'; },
  },

  // ── METAS OPERACIONAIS ──────────────────────────────────
  metas: {
    tempoCozinhaMin:  20,   // minutos
    tempoEntregaMin:  15,   // minutos
    tempoTotalSLA:    35,   // minutos (SLA máximo PizzaMetrics)
  },

  // ── ENTREGADORES (PizzaMetrics) ─────────────────────────
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

};

// Expõe globalmente para todos os módulos
window.BONITA_CONFIG = BONITA_CONFIG;
