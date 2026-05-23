// ═══════════════════════════════════════════════════════════
//  config.js — Bonità Pizzaria · Sistema de Gestão
//  Edite este arquivo antes de usar qualquer ferramenta.
//  NÃO comite tokens reais no GitHub — use variáveis de
//  ambiente ou um arquivo .env em produção.
// ═══════════════════════════════════════════════════════════

const BONITA_CONFIG = {

  // ── SAIPOS API ──────────────────────────────────────────
  saipos: {
    baseUrl:  'https://order.saipos.com',   // URL base da API Saipos
    token:    'SEU_BEARER_TOKEN_AQUI',      // Bearer token de integração
    storeId:  'SEU_STORE_ID_AQUI',          // ID da loja no Saipos
  },

  // ── METAS OPERACIONAIS ──────────────────────────────────
  metas: {
    tempoCozinhaMin:  20,   // minutos
    tempoEntregaMin:  15,   // minutos
    tempoTotalSLA:    45,   // minutos (SLA máximo)
  },

  // ── IDENTIDADE DA MARCA ─────────────────────────────────
  brand: {
    nome:       'Bonità Pizzaria',
    cidade:     'Penápolis, SP',
    cores: {
      red:    '#D6453D',
      green:  '#024D34',
      cream:  '#FFF0D6',
      blue:   '#A3CBD9',
    },
  },

  // ── FORNECEDORES ────────────────────────────────────────
  fornecedores: {
    secos:     ['Bispo', 'Mega G'],
    hortifruti: ['Mercado local'],
  },

};

// Expõe globalmente para todos os módulos
window.BONITA_CONFIG = BONITA_CONFIG;
