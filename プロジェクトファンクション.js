// ==========================================
// ANTI-CHEAT & SCREEN PROTECTION
// ==========================================
document.addEventListener('keydown', (e) => {
    const lang = gameState?.language || 'ja';
    const t = (translations[lang] || translations.ja);
    if (e.key === 'PrintScreen') {
        e.preventDefault();
        alert(t.antiCheatScreenshot || 'スクリーンショットは禁止されています！');
    }
    if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
        e.preventDefault();
        alert(t.antiCheatPrint || '印刷機能は禁止されています！');
    }
    if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) {
        e.preventDefault();
        alert(t.antiCheatDevTools || '開発者ツールは禁止されています！');
    }
});

document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    const lang = gameState?.language || 'ja';
    const t = (translations[lang] || translations.ja);
    alert(t.antiCheatContextMenu || '右クリックは禁止されています！');
    return false;
});

// ==========================================
// SVG ICON LIBRARY & METADATA
// ==========================================
const gameSvgIcons = {
    bank_historic: `<svg class="game-icon" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Historic Bank of Japan">
      <rect x="6" y="52" width="52" height="6" rx="2" fill="#e2e8f0" stroke="#1b1b1f" stroke-width="2.5" stroke-linejoin="round"/>
      <rect x="10" y="47" width="44" height="5" rx="1.5" fill="#f8fafc" stroke="#1b1b1f" stroke-width="2.5" stroke-linejoin="round"/>
      <polygon points="32,8 7,22 57,22" fill="#ffcc33" stroke="#1b1b1f" stroke-width="2.5" stroke-linejoin="round"/>
      <circle cx="32" cy="16" r="3.5" fill="#ff3b4e" stroke="#1b1b1f" stroke-width="2"/>
      <path d="M26,8 Q32,2 38,8" fill="#3577f1" stroke="#1b1b1f" stroke-width="2.5"/>
      <line x1="32" y1="2" x2="32" y2="0" stroke="#1b1b1f" stroke-width="2"/>
      <rect x="9" y="22" width="46" height="4" fill="#ffffff" stroke="#1b1b1f" stroke-width="2.5"/>
      <rect x="13" y="26" width="6" height="21" rx="1" fill="#fffdf7" stroke="#1b1b1f" stroke-width="2.5"/>
      <rect x="23" y="26" width="6" height="21" rx="1" fill="#fffdf7" stroke="#1b1b1f" stroke-width="2.5"/>
      <rect x="35" y="26" width="6" height="21" rx="1" fill="#fffdf7" stroke="#1b1b1f" stroke-width="2.5"/>
      <rect x="45" y="26" width="6" height="21" rx="1" fill="#fffdf7" stroke="#1b1b1f" stroke-width="2.5"/>
      <path d="M29,47 V35 A3,3 0 0 1 35,35 V47 Z" fill="#3577f1" stroke="#1b1b1f" stroke-width="2"/>
    </svg>`,

    bank_modern: `<svg class="game-icon" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Modern Bank">
      <rect x="10" y="10" width="44" height="48" rx="4" fill="#3577f1" stroke="#1b1b1f" stroke-width="2.5" stroke-linejoin="round"/>
      <rect x="15" y="16" width="9" height="8" rx="1.5" fill="#fffdf7" stroke="#1b1b1f" stroke-width="2"/>
      <rect x="28" y="16" width="9" height="8" rx="1.5" fill="#fffdf7" stroke="#1b1b1f" stroke-width="2"/>
      <rect x="40" y="16" width="9" height="8" rx="1.5" fill="#fffdf7" stroke="#1b1b1f" stroke-width="2"/>
      <rect x="15" y="28" width="9" height="8" rx="1.5" fill="#fffdf7" stroke="#1b1b1f" stroke-width="2"/>
      <rect x="28" y="28" width="9" height="8" rx="1.5" fill="#fffdf7" stroke="#1b1b1f" stroke-width="2"/>
      <rect x="40" y="28" width="9" height="8" rx="1.5" fill="#fffdf7" stroke="#1b1b1f" stroke-width="2"/>
      <rect x="24" y="42" width="16" height="16" rx="2" fill="#fffdf7" stroke="#1b1b1f" stroke-width="2.5"/>
      <circle cx="32" cy="7" r="6.5" fill="#ffcc33" stroke="#1b1b1f" stroke-width="2.5"/>
      <text x="32" y="10" font-family="'Dela Gothic One', 'M PLUS Rounded 1c', sans-serif" font-size="8" font-weight="bold" fill="#1b1b1f" text-anchor="middle">¥</text>
    </svg>`,

    currency_notes: `<svg class="game-icon" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Banknotes">
      <g transform="rotate(-10 32 34)">
        <rect x="8" y="22" width="48" height="26" rx="3" fill="#a8e6cf" stroke="#1b1b1f" stroke-width="2.5"/>
      </g>
      <rect x="8" y="20" width="48" height="28" rx="3" fill="#2ecc71" stroke="#1b1b1f" stroke-width="2.5"/>
      <rect x="12" y="24" width="40" height="20" rx="2" fill="#e8f8f0" stroke="#1b1b1f" stroke-width="1.8" stroke-dasharray="3 2"/>
      <circle cx="32" cy="34" r="6" fill="#ffcc33" stroke="#1b1b1f" stroke-width="2"/>
      <text x="32" y="37" font-family="'Dela Gothic One', 'M PLUS Rounded 1c', sans-serif" font-size="7" font-weight="bold" fill="#1b1b1f" text-anchor="middle">¥</text>
      <circle cx="50" cy="14" r="5" fill="#ffcc33" stroke="#1b1b1f" stroke-width="2"/>
      <line x1="50" y1="5" x2="50" y2="7" stroke="#1b1b1f" stroke-width="2" stroke-linecap="round"/>
      <line x1="57" y1="14" x2="59" y2="14" stroke="#1b1b1f" stroke-width="2" stroke-linecap="round"/>
    </svg>`,

    crossed_flags: `<svg class="game-icon" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Crossed Flags">
      <line x1="12" y1="12" x2="52" y2="54" stroke="#1b1b1f" stroke-width="3" stroke-linecap="round"/>
      <line x1="52" y1="12" x2="12" y2="54" stroke="#1b1b1f" stroke-width="3" stroke-linecap="round"/>
      <circle cx="12" cy="12" r="4.5" fill="#ffcc33" stroke="#1b1b1f" stroke-width="2.5"/>
      <circle cx="52" cy="12" r="4.5" fill="#ffcc33" stroke="#1b1b1f" stroke-width="2.5"/>
      <polygon points="15,15 32,24 23,38 12,28" fill="#ffffff" stroke="#1b1b1f" stroke-width="2.5" stroke-linejoin="round"/>
      <circle cx="21" cy="26" r="4" fill="#ff3b4e"/>
      <polygon points="49,15 32,24 41,38 52,28" fill="#ffffff" stroke="#1b1b1f" stroke-width="2.5" stroke-linejoin="round"/>
      <circle cx="43" cy="26" r="4" fill="#ff3b4e"/>
      <circle cx="32" cy="33" r="3.5" fill="#ffcc33" stroke="#1b1b1f" stroke-width="2"/>
    </svg>`,

    police_car: `<svg class="game-icon" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Police Patrol Car">
      <polygon points="28,12 36,12 38,17 26,17" fill="#ff3b4e" stroke="#1b1b1f" stroke-width="2.5" stroke-linejoin="round"/>
      <line x1="32" y1="6" x2="32" y2="9" stroke="#ff3b4e" stroke-width="2" stroke-linecap="round"/>
      <line x1="24" y1="8" x2="26" y2="10" stroke="#ff3b4e" stroke-width="2" stroke-linecap="round"/>
      <line x1="40" y1="8" x2="38" y2="10" stroke="#ff3b4e" stroke-width="2" stroke-linecap="round"/>
      <path d="M16,30 L22,17 L44,17 L52,30 Z" fill="#ffffff" stroke="#1b1b1f" stroke-width="2.5" stroke-linejoin="round"/>
      <polygon points="23,19 31,19 31,28 18,28" fill="#d0e5ff" stroke="#1b1b1f" stroke-width="1.8"/>
      <polygon points="34,19 43,19 49,28 34,28" fill="#d0e5ff" stroke="#1b1b1f" stroke-width="1.8"/>
      <rect x="6" y="28" width="52" height="8" fill="#ffffff" stroke="#1b1b1f" stroke-width="2.5"/>
      <path d="M6,36 H58 V45 C58,47 56,48 54,48 H10 C8,48 6,47 6,45 Z" fill="#1b1b1f" stroke="#1b1b1f" stroke-width="2.5"/>
      <polygon points="32,32 33.2,35.5 37,35.5 34,37.5 35.2,41 32,39 28.8,41 30,37.5 27,35.5 30.8,35.5" fill="#ffcc33" stroke="#1b1b1f" stroke-width="1"/>
      <circle cx="17" cy="48" r="6" fill="#1b1b1f"/>
      <circle cx="17" cy="48" r="3" fill="#ffffff" stroke="#1b1b1f" stroke-width="1.5"/>
      <circle cx="47" cy="48" r="6" fill="#1b1b1f"/>
      <circle cx="47" cy="48" r="3" fill="#ffffff" stroke="#1b1b1f" stroke-width="1.5"/>
      <rect x="56" y="32" width="2" height="4" fill="#ffcc33" rx="1"/>
      <rect x="6" y="32" width="2" height="4" fill="#ff3b4e" rx="1"/>
    </svg>`,

    ambulance: `<svg class="game-icon" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Ambulance">
      <ellipse cx="34" cy="12" rx="4" ry="3" fill="#ff3b4e" stroke="#1b1b1f" stroke-width="2"/>
      <line x1="34" y1="6" x2="34" y2="8" stroke="#ff3b4e" stroke-width="2" stroke-linecap="round"/>
      <path d="M8,16 H44 L54,28 V46 C54,48 52,49 50,49 H10 C8,49 8,48 8,46 Z" fill="#ffffff" stroke="#1b1b1f" stroke-width="2.5" stroke-linejoin="round"/>
      <polygon points="42,20 50,28 42,28" fill="#d0e5ff" stroke="#1b1b1f" stroke-width="2"/>
      <rect x="8" y="32" width="46" height="5" fill="#ff3b4e" stroke="#1b1b1f" stroke-width="1.5"/>
      <circle cx="25" cy="24" r="6" fill="#ffffff" stroke="#1b1b1f" stroke-width="1.5"/>
      <rect x="23.5" y="20" width="3" height="8" fill="#ff3b4e"/>
      <rect x="21" y="22.5" width="8" height="3" fill="#ff3b4e"/>
      <circle cx="18" cy="49" r="6" fill="#1b1b1f"/>
      <circle cx="18" cy="49" r="2.5" fill="#ffffff" stroke="#1b1b1f" stroke-width="1.5"/>
      <circle cx="44" cy="49" r="6" fill="#1b1b1f"/>
      <circle cx="44" cy="49" r="2.5" fill="#ffffff" stroke="#1b1b1f" stroke-width="1.5"/>
    </svg>`,

    fire_engine: `<svg class="game-icon" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Fire Engine">
      <rect x="12" y="9" width="34" height="6" rx="1.5" fill="#e2e8f0" stroke="#1b1b1f" stroke-width="2"/>
      <line x1="18" y1="9" x2="18" y2="15" stroke="#1b1b1f" stroke-width="1.5"/>
      <line x1="24" y1="9" x2="24" y2="15" stroke="#1b1b1f" stroke-width="1.5"/>
      <line x1="30" y1="9" x2="30" y2="15" stroke="#1b1b1f" stroke-width="1.5"/>
      <line x1="36" y1="9" x2="36" y2="15" stroke="#1b1b1f" stroke-width="1.5"/>
      <line x1="42" y1="9" x2="42" y2="15" stroke="#1b1b1f" stroke-width="1.5"/>
      <ellipse cx="48" cy="15" rx="3.5" ry="2.5" fill="#ffcc33" stroke="#1b1b1f" stroke-width="2"/>
      <path d="M8,17 H42 L56,28 V47 C56,49 54,50 52,50 H10 C8,50 8,49 8,47 Z" fill="#ff3b4e" stroke="#1b1b1f" stroke-width="2.5" stroke-linejoin="round"/>
      <polygon points="43,20 52,28 43,28" fill="#d0e5ff" stroke="#1b1b1f" stroke-width="2"/>
      <rect x="12" y="24" width="16" height="14" rx="2" fill="#fff3da" stroke="#1b1b1f" stroke-width="2"/>
      <circle cx="20" cy="31" r="4" fill="#ffcc33" stroke="#1b1b1f" stroke-width="1.5"/>
      <rect x="30" y="32" width="24" height="4" fill="#ffcc33" stroke="#1b1b1f" stroke-width="1.5"/>
      <circle cx="18" cy="50" r="6" fill="#1b1b1f"/>
      <circle cx="18" cy="50" r="2.5" fill="#e2e8f0" stroke="#1b1b1f" stroke-width="1.5"/>
      <circle cx="46" cy="50" r="6" fill="#1b1b1f"/>
      <circle cx="46" cy="50" r="2.5" fill="#e2e8f0" stroke="#1b1b1f" stroke-width="1.5"/>
    </svg>`,

    patrol_cruiser: `<svg class="game-icon" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Police Sunburst Emblem">
      <g fill="#ffcc33" stroke="#1b1b1f" stroke-width="2" stroke-linejoin="round">
        <polygon points="32,4 35,16 41,6 39,18 49,12 43,22 55,20 46,27 58,32 46,37 55,44 43,42 49,52 39,46 41,58 35,48 32,60 29,48 23,58 25,46 15,52 21,42 9,44 18,37 6,32 18,27 9,20 21,22 15,12 25,18 23,6 29,16"/>
      </g>
      <circle cx="32" cy="32" r="14" fill="#ff9416" stroke="#1b1b1f" stroke-width="2.5"/>
      <circle cx="32" cy="32" r="10" fill="#ffcc33" stroke="#1b1b1f" stroke-width="2"/>
      <circle cx="32" cy="32" r="4.5" fill="#ff3b4e" stroke="#1b1b1f" stroke-width="1.5"/>
      <polygon points="32,29 33,31.5 35.5,32 33,32.5 32,35 31,32.5 28.5,32 31,31.5" fill="#fffdf7"/>
    </svg>`,

    trophy_celebration: `<svg class="game-icon celebration-icon" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Victory Trophy">
      <rect x="10" y="8" width="4" height="4" fill="#ff3b4e" transform="rotate(25 12 10)"/>
      <rect x="50" y="10" width="4" height="4" fill="#3577f1" transform="rotate(-30 52 12)"/>
      <circle cx="16" cy="22" r="2.5" fill="#ffcc33"/>
      <circle cx="48" cy="22" r="2.5" fill="#2ecc71"/>
      <path d="M18,12 H46 V26 C46,34 38,40 32,40 C26,40 18,34 18,26 Z" fill="#ffcc33" stroke="#1b1b1f" stroke-width="2.5" stroke-linejoin="round"/>
      <path d="M18,16 H12 C9.8,16 8,17.8 8,20 V22 C8,26 12,28 18,28" fill="none" stroke="#1b1b1f" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M46,16 H52 C54.2,16 56,17.8 56,20 V22 C56,26 52,28 46,28" fill="none" stroke="#1b1b1f" stroke-width="2.5" stroke-linecap="round"/>
      <rect x="29" y="40" width="6" height="8" fill="#ff9416" stroke="#1b1b1f" stroke-width="2.5"/>
      <rect x="20" y="48" width="24" height="8" rx="2" fill="#ff3b4e" stroke="#1b1b1f" stroke-width="2.5"/>
      <polygon points="32,18 33.5,22 38,22 34.5,24.5 36,29 32,26.5 28,29 29.5,24.5 26,22 30.5,22" fill="#ffffff" stroke="#1b1b1f" stroke-width="1"/>
    </svg>`,

    stamp_star: `<svg class="stamp-star-icon" viewBox="0 0 24 24" width="16" height="16" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="#ff3b4e" stroke="#1b1b1f" stroke-width="2" stroke-linejoin="round"/></svg>`,

    icon_rules: `<svg class="ui-icon" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>`,

    icon_lang: `<svg class="ui-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,

    icon_qr: `<svg class="ui-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>`,

    icon_hint: `<svg class="ui-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"/></svg>`,

    icon_restart: `<svg class="ui-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg>`
};

function getGameIconSvg(name) {
    return gameSvgIcons[name] || '';
}

const visualOptionMeta = {
    bank_modern: { ja: '現代の銀行', en: 'Modern Bank' },
    bank_historic: { ja: '日本銀行（歴史的本館）', en: 'Bank of Japan (Historic)' },
    currency_notes: { ja: '紙幣・お金', en: 'Banknotes & Cash' },
    crossed_flags: { ja: '祝祭の交差旗', en: 'Crossed Flags' },
    ambulance: { ja: '救急車', en: 'Ambulance' },
    fire_engine: { ja: '消防車', en: 'Fire Engine' },
    police_car: { ja: 'パトカー', en: 'Police Patrol Car' },
    patrol_cruiser: { ja: '警察紋章（旭日章）', en: 'Police Star Emblem' }
};

// ==========================================
// GAME DATA & SECRET CODES
// ==========================================
const SHARED_SECRET_CODE = ['SEITOKAI', '483433', 'IKEMENKAICHOU', 'SIX SEVEN'];

const questions = [
    // ペア1: タイプA1（場所） + タイプB1（特徴）
    { id: 1, category: "タイプA1", categoryName: "場所", type: "choice", question: "日本で一番大きい湖はどこでしょう？", options: ["琵琶湖", "霞ヶ浦", "サロマ湖", "浜名湖"], correctAnswer: "琵琶湖", answers: ["琵琶湖", "びわこ", "ビワコ"], hint1: "ヒント１: 滋賀県にあります", hint2: "ヒント２: 面積は日本の湖の中で最大です" },
    { id: 2, category: "タイプB1", categoryName: "特徴", type: "riddle", question: "私は毎朝東からのぼり、夕方には西に沈みます。私は何でしょう？", answers: ["太陽", "たいよう", "タイヨウ", "お日様", "おひさま"], hint1: "ヒント１: 私がいないと世界は真っ暗になります", hint2: "ヒント２: 私のおかげで昼と夜ができます" },
    // ペア2: タイプA2（場所） + タイプB2（特徴）
    { id: 3, category: "タイプA2", categoryName: "場所", type: "choice", question: "日本の国会議事堂があるのはどこでしょう？", options: ["東京都千代田区", "大阪市", "京都市", "横浜市"], correctAnswer: "東京都千代田区", answers: ["東京都千代田区", "千代田区", "ちよだく", "東京"], hint1: "ヒント１: 日本の首都にあります", hint2: "ヒント２: 国会議員が集まって話し合う建物です" },
    { id: 4, category: "タイプB2", categoryName: "特徴", type: "riddle", question: "私には顔と針があり、毎日休まず動き続けますが、生き物ではありません。私は何でしょう？", answers: ["時計", "とけい", "トケイ"], hint1: "ヒント１: 秒針・分針・時針の3本があるものが多いです", hint2: "ヒント２: 壁や腕にかけられています" },
    // ペア3: タイプA3（場所） + タイプB3（特徴）
    { id: 5, category: "タイプA3", categoryName: "場所", type: "choice", question: "日本で一番面積が大きい都道府県はどこでしょう？", options: ["北海道", "岩手県", "福島県", "長野県"], correctAnswer: "北海道", answers: ["北海道", "ほっかいどう", "ホッカイドウ"], hint1: "ヒント１: 日本の最北に位置します", hint2: "ヒント２: 面積は2位の岩手県の約5倍です" },
    { id: 6, category: "タイプB3", categoryName: "特徴", type: "riddle", question: "私は毎日姿を変えるのに、いつも同じ壁に貼られています。私は何でしょう？", answers: ["カレンダー", "かれんだー", "こよみ"], hint1: "ヒント１: 1年365日の予定を確認するのに使います", hint2: "ヒント２: 12枚のページに分かれていることが多いです" },
    // ペア4: タイプA4（場所） + タイプB4（特徴）
    { id: 7, category: "タイプA4", categoryName: "場所", type: "choice", question: "京都で毎年7月に行われる、日本三大祭りの一つはどれでしょう？", options: ["祇園祭", "ねぶた祭り", "天神祭", "さっぽろ雪まつり"], correctAnswer: "祇園祭", answers: ["祇園祭", "ぎおんまつり", "ギオンマツリ"], hint1: "ヒント１: 八坂神社のお祭りです", hint2: "ヒント２: 山鉾巡行で有名です" },
    { id: 8, category: "タイプB4", categoryName: "特徴", type: "riddle", question: "私は口がないのに、たくさんの物語を語りかけます。私は何でしょう？", answers: ["本", "ほん", "書籍", "絵本"], hint1: "ヒント１: ページをめくって読みます", hint2: "ヒント２: 図書室にたくさん並んでいます" }
];

// ==========================================
// ENGLISH TRANSLATIONS & DICTIONARIES
// ==========================================
const englishQuestionText = {
    1: 'What is the largest lake in Japan?',
    2: 'I rise in the east every morning and set in the west every evening. What am I?',
    3: "Where is Japan's National Diet Building located?",
    4: 'I have a face and hands, and I never stop moving, but I am not alive. What am I?',
    5: 'Which prefecture has the largest area in Japan?',
    6: 'I change my appearance every day, but I always hang on the same wall. What am I?',
    7: 'Which of these is one of the three great festivals of Japan, held every July in Kyoto?',
    8: 'I have no mouth, yet I tell many stories. What am I?'
};

const englishOptionMap = {
    1: ['Lake Biwa', 'Lake Kasumigaura', 'Lake Saroma', 'Lake Hamana'],
    3: ['Chiyoda, Tokyo', 'Osaka City', 'Kyoto City', 'Yokohama City'],
    5: ['Hokkaido', 'Iwate Prefecture', 'Fukushima Prefecture', 'Nagano Prefecture'],
    7: ['Gion Festival', 'Nebuta Festival', 'Tenjin Festival', 'Sapporo Snow Festival']
};

const englishAnswersMap = {
    1: ['Lake Biwa', 'lake biwa', 'biwa lake', 'biwako'],
    2: ['the sun', 'sun', 'a sun'],
    3: ['Chiyoda', 'Chiyoda, Tokyo', 'chiyoda ward', 'tokyo'],
    4: ['clock', 'a clock', 'the clock', 'watch'],
    5: ['Hokkaido', 'hokkaido'],
    6: ['calendar', 'a calendar', 'the calendar'],
    7: ['Gion Festival', 'gion festival', 'gion matsuri'],
    8: ['book', 'a book', 'the book', 'books', 'picture book']
};

const englishCorrectAnswerMap = {
    1: 'Lake Biwa', 3: 'Chiyoda, Tokyo', 5: 'Hokkaido', 7: 'Gion Festival'
};

const englishHintMap = {
    1: { hint1: 'Hint 1: It is in Shiga Prefecture.', hint2: 'Hint 2: It is the largest lake in Japan by area.' },
    2: { hint1: 'Hint 1: Without me, the world would be pitch dark.', hint2: 'Hint 2: I am the reason day and night exist.' },
    3: { hint1: "Hint 1: It is in Japan's capital city.", hint2: 'Hint 2: It is the building where members of the Diet gather to discuss laws.' },
    4: { hint1: 'Hint 1: Most of us have three hands: second, minute, and hour.', hint2: 'Hint 2: We are often hung on a wall or worn on a wrist.' },
    5: { hint1: 'Hint 1: It is located at the northernmost tip of Japan.', hint2: 'Hint 2: Its area is about 5 times that of Iwate, the second largest.' },
    6: { hint1: 'Hint 1: It is used to keep track of the 365 days of the year.', hint2: 'Hint 2: It is often split into 12 pages, one per month.' },
    7: { hint1: 'Hint 1: It is a festival of Yasaka Shrine.', hint2: 'Hint 2: It is famous for its Yamaboko float procession.' },
    8: { hint1: 'Hint 1: You read me by turning pages.', hint2: 'Hint 2: You can find lots of me in a library.' }
};

const translations = {
    ja: {
        pageTitle: '「シン・探せいとかい：II」',
        menuText: 'ようこそ！このゲームをプレイしますか？',
        rulesTitle: 'ゲームルール',
        rules: [
            '全4組の謎解きに挑戦！各組は「場所」と「特徴」のペアで固定されています🔍✨',
            '各問題に対して正しい答えを入力してください',
            '1ページに2問ずつ出題され、1問目を正解すると2問目が開きます',
            'ペア（1ページ2問）をクリアするごとにスタンプが1つ増えます（全部で4つ！）',
            'すべてのなぞなぞとコードをクリアして、宝箱を開ける！',
            '出題される4組の順番は毎回ランダムですが、各組のペア（場所と特徴）は必ず一緒に出ます'
        ],
        menuDescription: '「場所」と「特徴」がペアになった4組の問題をすべて解いてみよう！',
        startGame: 'ゲーム開始！',
        language: 'Language',
        questionNumPrefix: '問題',
        answerPlaceholder: '答えを入力してください～',
        captchaPlaceholder: '文字と数字を入力してください',
        choiceDefaultText: '選択肢から選んでください',
        visualDefaultText: '正しい選択肢をクリックしてください',
        captchaDefaultText: '画像に含まれる数字と文字を組み合わせて答えてください',
        checkAnswerBtn: '答える！',
        resultEmpty: '答えを入力してください！',
        resultWrong: '不正解です。もう一度試してください！',
        resultCorrect: 'やったね！大正解！！',
        resultDuplicate: 'その回答はすでに試しました！',
        mistakeCountLabel: (n) => `失敗数: ${n}`,
        hint1Locked: 'ヒント１（3回失敗後に表示）',
        hint1Unlocked: 'ヒント１を見る',
        hint1Maxed: 'ヒント１は2回まで',
        hint2Locked: 'ヒント２（5回失敗後に表示）',
        hint2Unlocked: 'ヒント２を見る',
        hint2Maxed: 'ヒント２は2回まで',
        intermediateTitle: '正解です！',
        intermediateDescription: '次の問題に進むため、シークレットコードを入力またはスキャンしてください',
        intermediateManualLabel: '手動でコードを入力:',
        intermediateInputPlaceholder: 'コードを入力してください',
        intermediateSubmitBtn: 'コード送信',
        intermediateQrLabel: 'またはQRコードをスキャン:',
        qrOpenBtn: 'QRスキャナーを開く',
        qrCloseBtn: 'スキャンを閉じる',
        qrStatusAccessing: 'カメラをアクセス中...',
        qrStatusScanning: 'カメラに向けてQRコードをスキャンしてください',
        qrStatusError: 'カメラにアクセスできませんでした',
        intermediateCodeEmpty: 'コードを入力してください！',
        intermediateCodeInvalid: 'コードが無効です。正しいコードを入力してください。',
        intermediateCodeSuccess: 'コードが認証されました！次の問題に進みます...',
        finalTitle: 'やったね！全問題をクリアしました！',
        finalDescription: '最後のステップです。最終シークレットコードを入力またはスキャンしてください',
        finalManualLabel: '手動でコードを入力:',
        finalInputPlaceholder: 'コードを入力してください',
        finalSubmitBtn: 'コード送信',
        finalQrLabel: 'またはQRコードをスキャン:',
        finalSuccess: 'コードが認証されました！おめでとうございます！',
        finalCodeInvalid: 'コードが無効です。正しいコードを入力してください。',
        finalCodeEmpty: 'コードを入力してください！',
        playAgainBtn: 'もう一度プレイ',
        personaCallouts: ['イケイケ！', 'どうだろうな！', '当たってMiiや！', 'せやで～'],
        personaCalloutRare: 'thee does know ze way!',
        antiCheatScreenshot: 'スクリーンショットは禁止されています！',
        antiCheatPrint: '印刷機能は禁止されています！',
        antiCheatDevTools: '開発者ツールは禁止されています！',
        antiCheatContextMenu: '右クリックは禁止されています！'
    },
    en: {
        pageTitle: 'Shin Seitokai: II',
        menuText: 'Welcome! Would you like to play this game?',
        rulesTitle: 'Game Rules',
        rules: [
            'Solve 4 fixed pairs of riddles! Each pair is a locked "Location" + "Feature" set 🔍✨',
            'Enter the correct answer for each question',
            'Two questions appear on each page; Question 2 unlocks after Question 1 is correct',
            'You earn 1 stamp every time you solve a pair page (4 stamps total!)',
            'Clear all riddles and secret codes to unlock the treasure!',
            'The order of the 4 pairs is randomized each time, but each pair (Location + Feature) always stays together'
        ],
        menuDescription: 'Solve all 4 fixed pairs, each combining a "Location" question with a "Feature" riddle!',
        startGame: 'Start Game!',
        language: 'Language',
        questionNumPrefix: 'Question',
        answerPlaceholder: 'Type your answer here...',
        captchaPlaceholder: 'Type the letters and numbers',
        choiceDefaultText: 'Choose from the options below',
        visualDefaultText: 'Click the correct symbol',
        captchaDefaultText: 'Please enter the characters and numbers shown in the image',
        checkAnswerBtn: 'Submit Answer!',
        resultEmpty: 'Please enter your answer!',
        resultWrong: 'Incorrect. Please try again!',
        resultCorrect: 'Awesome! That is correct!!',
        resultDuplicate: 'You already tried this answer!',
        mistakeCountLabel: (n) => `Mistakes: ${n}`,
        hint1Locked: 'Hint 1 (unlocks after 3 mistakes)',
        hint1Unlocked: 'View Hint 1',
        hint1Maxed: 'Hint 1: max 2 views',
        hint2Locked: 'Hint 2 (unlocks after 5 mistakes)',
        hint2Unlocked: 'View Hint 2',
        hint2Maxed: 'Hint 2: max 2 views',
        intermediateTitle: 'Correct Answer!',
        intermediateDescription: 'Enter or scan the secret code to proceed to the next question set',
        intermediateManualLabel: 'Enter code manually:',
        intermediateInputPlaceholder: 'Enter code here',
        intermediateSubmitBtn: 'Submit Code',
        intermediateQrLabel: 'Or scan the QR code:',
        qrOpenBtn: 'Open QR Scanner',
        qrCloseBtn: 'Close Scanner',
        qrStatusAccessing: 'Accessing camera...',
        qrStatusScanning: 'Point your camera at a QR code',
        qrStatusError: 'Could not access camera',
        intermediateCodeEmpty: 'Please enter the code!',
        intermediateCodeInvalid: 'Invalid code. Please enter the correct code.',
        intermediateCodeSuccess: 'Code verified! Moving to the next question...',
        finalTitle: 'You did it! All questions cleared!',
        finalDescription: 'Final step: enter or scan the secret code to complete the game',
        finalManualLabel: 'Enter code manually:',
        finalInputPlaceholder: 'Enter code here',
        finalSubmitBtn: 'Submit Code',
        finalQrLabel: 'Or scan the QR code:',
        finalSuccess: 'Code verified! Congratulations!',
        finalCodeInvalid: 'Invalid code. Please enter the correct code.',
        finalCodeEmpty: 'Please enter the code!',
        playAgainBtn: 'Play Again',
        personaCallouts: ['ANSWERING!', 'IM DOING IT~', 'ARE YOU SURE?', 'LETS GO!'],
        personaCalloutRare: 'thee does know ze way!',
        antiCheatScreenshot: 'Screenshots are disabled!',
        antiCheatPrint: 'Printing is disabled!',
        antiCheatDevTools: 'Developer tools are disabled!',
        antiCheatContextMenu: 'Right-click is disabled!'
    }
};

// ==========================================
// GAME STATE MANAGEMENT
// ==========================================
let gameState = {
    currentQuestion: 0,
    pairPage: 0,
    q1Correct: false,
    completedQuestions: 0,
    stage: 'menu',
    questionSequence: [],
    mistakesCount: 0,
    hint1Shown: false,
    hint2Shown: false,
    wrongAnswerHistory: {},
    hint1Attempts: {},
    hint2Attempts: {},
    secretCode: SHARED_SECRET_CODE,
    answerLocked: false,
    isCooldown: false,
    language: 'ja',
    qrScannerActive: false,
    qrScannerStream: null,
    intermediateQrScannerActive: false,
    intermediateQrScannerStream: null
};

// Helper Functions
function getDisplayAnswer(question, rawAnswer) {
    if (question && question.type === 'visual') {
        const meta = visualOptionMeta[rawAnswer];
        return meta ? (meta[gameState.language] || meta.ja) : rawAnswer;
    }
    return rawAnswer;
}

function formatPairAnswers() {
    const labelA = gameState.language === 'en' ? 'A' : 'A';
    const labelB = gameState.language === 'en' ? 'B' : 'B';
    const a = gameState.lastPairAnswerA || (gameState.language === 'en' ? '(no answer)' : '（未回答）');
    const b = gameState.lastPairAnswerB || (gameState.language === 'en' ? '(no answer)' : '（未回答）');
    return `${labelA}: ${a}　／　${labelB}: ${b}`;
}

function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function shufflePairsKeepingOrder(allQuestions) {
    // Group into fixed [A, B] pairs, then shuffle which pair comes first —
    // but always keep each pair's two questions glued together, in order.
    const pairs = [];
    for (let i = 0; i < allQuestions.length; i += 2) {
        pairs.push([allQuestions[i], allQuestions[i + 1]]);
    }
    return shuffleArray(pairs).flat();
}

function showScreen(screenName) {
    ['menuScreen', 'questionScreen', 'intermediateCodeScreen', 'codeScreen'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.classList.add('hidden');
    });

    const secretDisplay = document.getElementById('secretCodeDisplay');
    if (secretDisplay) secretDisplay.classList.add('hidden');

    const target = document.getElementById(screenName);
    if (target) target.classList.remove('hidden');
}

function normalizeAnswer(value) {
    return String(value || '')
        .trim()
        .toLowerCase()
        .replace(/[\s\-_]/g, '')
        .replace(/[。！？.,!?:;'"“”]/g, '');
}

function getLocalizedHint(question, hintNumber) {
    const key = hintNumber === 1 ? 'hint1' : 'hint2';
    if (gameState.language === 'en' && englishHintMap[question.id]) {
        return englishHintMap[question.id][key];
    }
    return question[key];
}

function getLocalizedQuestionText(question) {
    if (gameState.language === 'en') {
        return englishQuestionText[question.id] || question.question;
    }
    return question.question;
}

function getLocalizedOptions(question) {
    if (gameState.language === 'en' && englishOptionMap[question.id]) {
        return englishOptionMap[question.id];
    }
    return question.options || [];
}

function getAcceptedAnswers(question) {
    const answers = [...(question.answers || [])];
    answers.push(...(englishAnswersMap[question.id] || []));
    if (question.correctAnswer) answers.push(question.correctAnswer);
    if (englishCorrectAnswerMap[question.id]) answers.push(englishCorrectAnswerMap[question.id]);
    return [...new Set(answers.filter(Boolean))];
}

// ==========================================
// UI LOCALIZATION
// ==========================================
function applyLanguageUI() {
    const lang = gameState.language;
    const t = translations[lang] || translations.ja;

    document.documentElement.lang = lang;
    const pageTitle = document.getElementById('pageTitle');
    if (pageTitle) pageTitle.textContent = t.pageTitle;

    const menuText = document.getElementById('menuText');
    const rulesTitle = document.getElementById('rulesTitle');
    const rulesList = document.getElementById('rulesList');
    const menuDescription = document.getElementById('menuDescription');
    const startGameBtn = document.getElementById('startGameBtn');
    const languageLabel = document.querySelector('.language-label');
    const languageSelect = document.getElementById('languageSelect');

    if (menuText) menuText.textContent = t.menuText;
    if (rulesTitle) rulesTitle.innerHTML = `${getGameIconSvg('icon_rules')} <span>${t.rulesTitle}</span>`;
    if (rulesList && t.rules) rulesList.innerHTML = t.rules.map(item => `<li>${item}</li>`).join('');
    if (menuDescription) {
        const customJa = menuDescription.dataset.ja || t.menuDescription;
        const customEn = menuDescription.dataset.en || t.menuDescription;
        menuDescription.textContent = lang === 'en' ? customEn : customJa;
    }
    if (startGameBtn) startGameBtn.textContent = t.startGame;
    if (languageLabel) languageLabel.innerHTML = `${getGameIconSvg('icon_lang')} <span>${t.language}</span>`;
    if (languageSelect) languageSelect.value = lang;

    if (gameState.stage === 'question' && gameState.questionSequence.length) {
        renderQuestionPair();
    }

    // Intermediate Screen UI
    const intTitle = document.getElementById('intermediateCodeTitle');
    if (intTitle) intTitle.textContent = t.intermediateTitle;
    const intDesc = document.getElementById('intermediateCodeDescription');
    if (intDesc) intDesc.textContent = t.intermediateDescription;
    const intManual = document.getElementById('intermediateManualLabel');
    if (intManual) intManual.textContent = t.intermediateManualLabel;
    const intInput = document.getElementById('intermediateCodeInput');
    if (intInput) intInput.placeholder = t.intermediateInputPlaceholder;
    const intSubBtn = document.getElementById('intermediateSubmitBtn');
    if (intSubBtn) intSubBtn.textContent = t.intermediateSubmitBtn;
    const intQrLabel = document.getElementById('intermediateQrLabel');
    if (intQrLabel) intQrLabel.textContent = t.intermediateQrLabel;
    const intQrToggle = document.getElementById('intermediateQrToggleBtn');
    if (intQrToggle) intQrToggle.textContent = t.qrOpenBtn;
    const intQrClose = document.getElementById('intermediateQrCloseBtn');
    if (intQrClose) intQrClose.textContent = t.qrCloseBtn;

    // Final Screen UI
    const finalTitle = document.getElementById('finalCodeTitle');
    if (finalTitle) finalTitle.textContent = t.finalTitle;
    const finalDesc = document.getElementById('finalCodeDescription');
    if (finalDesc) finalDesc.textContent = t.finalDescription;
    const finalManual = document.getElementById('finalManualLabel');
    if (finalManual) finalManual.textContent = t.finalManualLabel;
    const finalInput = document.getElementById('codeInput');
    if (finalInput) finalInput.placeholder = t.finalInputPlaceholder;
    const finalSubBtn = document.getElementById('finalSubmitBtn');
    if (finalSubBtn) finalSubBtn.textContent = t.finalSubmitBtn;
    const finalQrLabel = document.getElementById('finalQrLabel');
    if (finalQrLabel) finalQrLabel.textContent = t.finalQrLabel;
    const qrToggle = document.getElementById('qrToggleBtn');
    if (qrToggle) qrToggle.textContent = t.qrOpenBtn;
    const finalQrClose = document.getElementById('finalQrCloseBtn');
    if (finalQrClose) finalQrClose.textContent = t.qrCloseBtn;
    const resetBtn = document.getElementById('resetGameBtn');
    if (resetBtn) resetBtn.textContent = t.playAgainBtn;
}

// ==========================================
// CORE GAME LOGIC
// ==========================================
function startGame() {
    const languageSelect = document.getElementById('languageSelect');
    if (languageSelect) gameState.language = languageSelect.value || 'ja';

    gameState.stage = 'question';
    gameState.currentQuestion = 0;
    gameState.pairPage = 0;
    gameState.q1Correct = false;
    gameState.completedQuestions = 0;
    gameState.secretCode = SHARED_SECRET_CODE;
    gameState.answerLocked = false;
    gameState.isCooldown = false;

    const stampTray = document.getElementById('stampTray');
    if (stampTray) {
        stampTray.innerHTML = '';
        stampTray.classList.remove('hidden');
    }

    gameState.questionSequence = shufflePairsKeepingOrder(questions); // pair order is randomized, but each pair's A+B stay glued together
    showScreen('questionScreen');
    renderQuestionPair();
}

function getPairQuestion(slot) {
    return gameState.questionSequence[gameState.pairPage * 2 + slot];
}

// I wished you didnt really shuffle mate.
function renderQuestionPair() {
    const pair = document.getElementById('questionPair');
    if (!pair) return;

    const q1 = getPairQuestion(0);
    const q2 = getPairQuestion(1);
    if (!q1 || !q2) return;

    const qNum = document.getElementById('questionNumber');
    if (qNum) {
        const page = gameState.pairPage + 1;
        qNum.textContent = gameState.language === 'en'
            ? `Page ${page} / 4 — Questions ${gameState.pairPage * 2 + 1}–${gameState.pairPage * 2 + 2}`
            : `ページ #${page} / 4 — 問題 ${gameState.pairPage * 2 + 1}・${gameState.pairPage * 2 + 2}`;
    }

    pair.innerHTML = '';
    pair.appendChild(buildQuestionCard(q1, 0));
    pair.appendChild(buildQuestionCard(q2, 1));

    const pFill = document.getElementById('progressFill');
    if (pFill) pFill.style.width = `${((gameState.pairPage + 1) / 4) * 100}%`;

    setQuestion2Locked(!gameState.q1Correct);
}

function buildQuestionCard(question, slot) {
    const card = document.createElement('section');
    card.className = `pair-question-card ${slot === 1 && !gameState.q1Correct ? 'question-locked' : ''}`;
    card.id = `questionCard${slot}`;

    const title = document.createElement('div');
    title.className = 'pair-question-title';
    title.textContent = gameState.language === 'en'
        ? `Question ${gameState.pairPage * 2 + slot + 1}`
        : `第${gameState.pairPage * 2 + slot + 1}問`;
    card.appendChild(title);

    const text = document.createElement('p');
    text.className = 'pair-question-text';
    text.textContent = getLocalizedQuestionText(question);
    card.appendChild(text);

    const content = document.createElement('div');
    content.className = 'pair-question-content';

    if (question.type === 'riddle') {
        const input = document.createElement('input');
        input.type = 'text';
        input.id = `answer-${slot}`;
        input.className = 'pair-answer-input';
        input.placeholder = (translations[gameState.language] || translations.ja).answerPlaceholder;
        content.appendChild(input);
    } else if (question.type === 'choice') {
        const options = document.createElement('div');
        options.className = 'options-container';
        getLocalizedOptions(question).forEach(option => {
            const label = document.createElement('label');
            label.className = 'choice-option';
            const input = document.createElement('input');
            input.type = 'radio';
            input.name = `choiceAnswer-${slot}`;
            input.value = option;
            label.appendChild(input);
            label.appendChild(document.createTextNode(option));
            options.appendChild(label);
        });
        content.appendChild(options);
    } else if (question.type === 'captcha') {
        const captcha = document.createElement('div');
        captcha.className = 'captcha-box';
        for (const char of question.captchaText) {
            const span = document.createElement('span');
            span.textContent = char;
            span.className = 'captcha-char';
            span.style.transform = `rotate(${Math.random() * 30 - 15}deg)`;
            captcha.appendChild(span);
        }
        content.appendChild(captcha);

        const input = document.createElement('input');
        input.type = 'text';
        input.id = `captchaAnswer-${slot}`;
        input.className = 'pair-answer-input';
        input.placeholder = (translations[gameState.language] || translations.ja).captchaPlaceholder;
        content.appendChild(input);
    } else if (question.type === 'visual') {
        const options = document.createElement('div');
        options.className = 'visual-options-container';
        getLocalizedOptions(question).forEach(optionKey => {
            const label = document.createElement('label');
            label.className = 'visual-option';
            const input = document.createElement('input');
            input.type = 'radio';
            input.name = `visualAnswer-${slot}`;
            input.value = optionKey;
            label.appendChild(input);

            const iconWrapper = document.createElement('div');
            iconWrapper.className = 'visual-icon-wrapper';
            iconWrapper.innerHTML = getGameIconSvg(optionKey);
            label.appendChild(iconWrapper);

            const meta = visualOptionMeta[optionKey];
            const caption = document.createElement('span');
            caption.className = 'visual-option-label';
            caption.textContent = meta ? (meta[gameState.language] || meta.ja) : optionKey;
            label.appendChild(caption);
            options.appendChild(label);
        });
        content.appendChild(options);
    }

    card.appendChild(content);

    const result = document.createElement('p');
    result.id = `result-${slot}`;
    result.className = 'pair-result';
    card.appendChild(result);

    const button = document.createElement('button');
    button.className = 'btn-primary pair-answer-button';
    button.textContent = (translations[gameState.language] || translations.ja).checkAnswerBtn;
    button.onclick = () => checkAnswer(slot);
    card.appendChild(button);

    const hint = document.createElement('div');
    hint.className = 'pair-hints';

    const mistake = document.createElement('p');
    mistake.id = `mistakeCount-${slot}`;
    mistake.className = 'pair-mistake-count';
    mistake.textContent = (translations[gameState.language] || translations.ja).mistakeCountLabel(0);
    hint.appendChild(mistake);

    const h1 = document.createElement('button');
    h1.id = `hint1Btn-${slot}`;
    h1.className = 'btn-hint';
    h1.textContent = (translations[gameState.language] || translations.ja).hint1Locked;
    h1.disabled = true;
    h1.onclick = () => showHint1(slot);
    hint.appendChild(h1);

    const h1box = document.createElement('div');
    h1box.id = `hint1Container-${slot}`;
    h1box.className = 'hint-box hidden';
    hint.appendChild(h1box);

    const h2 = document.createElement('button');
    h2.id = `hint2Btn-${slot}`;
    h2.className = 'btn-hint';
    h2.textContent = (translations[gameState.language] || translations.ja).hint2Locked;
    h2.disabled = true;
    h2.onclick = () => showHint2(slot);
    hint.appendChild(h2);

    const h2box = document.createElement('div');
    h2box.id = `hint2Container-${slot}`;
    h2box.className = 'hint-box hidden';
    hint.appendChild(h2box);

    card.appendChild(hint);

    if (slot === 1 && !gameState.q1Correct) {
        const lock = document.createElement('div');
        lock.className = 'question-lock-overlay';
        lock.textContent = gameState.language === 'en'
            ? '🔒 Solve Question 1 first'
            : '🔒 第1問を正解すると開きます';
        card.appendChild(lock);
    }

    return card;
}

function setQuestion2Locked(locked) {
    const card = document.getElementById('questionCard1');
    if (!card) return;
    card.classList.toggle('question-locked', locked);

    card.querySelectorAll('input, button').forEach(el => {
        el.disabled = locked;
    });

    const overlay = card.querySelector('.question-lock-overlay');
    if (locked && !overlay) {
        const lock = document.createElement('div');
        lock.className = 'question-lock-overlay';
        lock.textContent = gameState.language === 'en'
            ? '🔒 Solve Question 1 first'
            : '🔒 第1問を正解すると開きます';
        card.appendChild(lock);
    } else if (!locked && overlay) {
        overlay.remove();
    }
}

function addStamp() {
    const stampTray = document.getElementById('stampTray');
    if (stampTray) {
        const stamp = document.createElement('span');
        stamp.className = 'stamp';
        stamp.innerHTML = `${getGameIconSvg('stamp_star')} <span>Stamp ${stampTray.children.length + 1}</span>`;
        stampTray.appendChild(stamp);
    }
}

// why the fuck are you a slot and not a qNum dude
function checkAnswer(slot) {
    if (slot === 1 && !gameState.q1Correct) return;

    const question = getPairQuestion(slot);
    if (!question) return;

    const questionId = question.id;
    const card = document.getElementById(`questionCard${slot}`);
    const resultElement = document.getElementById(`result-${slot}`);
    const submitBtn = card?.querySelector('.pair-answer-button');
    const activeT = translations[gameState.language] || translations.ja;

    let userAnswer = '';
    if (question.type === 'choice') {
        userAnswer = card.querySelector(`input[name="choiceAnswer-${slot}"]:checked`)?.value || '';
    } else if (question.type === 'visual') {
        userAnswer = card.querySelector(`input[name="visualAnswer-${slot}"]:checked`)?.value || '';
    } else if (question.type === 'captcha') {
        userAnswer = document.getElementById(`captchaAnswer-${slot}`)?.value.trim() || '';
    } else {
        userAnswer = document.getElementById(`answer-${slot}`)?.value.trim() || '';
    }

    if (!userAnswer) {
        resultElement.textContent = activeT.resultEmpty;
        resultElement.style.color = 'orange';
        return;
    }

    if (!gameState.wrongAnswerHistory[questionId]) gameState.wrongAnswerHistory[questionId] = [];
    const normalized = normalizeAnswer(userAnswer);
    const accepted = getAcceptedAnswers(question);
    const correct = accepted.some(answer => normalizeAnswer(answer) === normalized);

    if (correct) {
        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.style.opacity = '0.65';
        }

        resultElement.textContent = activeT.resultCorrect;
        resultElement.style.color = 'green';
        gameState.completedQuestions++;

        if (slot === 0) {
            gameState.q1Correct = true;
            gameState.lastPairAnswerA = getDisplayAnswer(question, userAnswer);
            celebrateCorrectAnswer();
            setQuestion2Locked(false);
        } else {
            // Give a stamp mark upon completing the pair of quizzes
            addStamp();
            celebrateCorrectAnswer();
            gameState.lastPairAnswerB = getDisplayAnswer(question, userAnswer);

            setTimeout(() => {
                // Route to intermediate secret code screen before advancing to next pair
                gameState.stage = 'intermediateCode';
                showScreen('intermediateCodeScreen');
                applyLanguageUI();
                const prevEl = document.getElementById('previousAnswerText');
                if (prevEl) prevEl.textContent = formatPairAnswers();
            }, 900);
        }
        return;
    }

    const duplicate = gameState.wrongAnswerHistory[questionId].some(
        previous => normalizeAnswer(previous) === normalized
    );
    if (duplicate) {
        resultElement.textContent = activeT.resultDuplicate;
        resultElement.style.color = 'orange';
        return;
    }

    gameState.wrongAnswerHistory[questionId].push(userAnswer);

    const mistakeKey = `mistakes_${questionId}`;
    gameState[mistakeKey] = (gameState[mistakeKey] || 0) + 1;
    const mistakes = gameState[mistakeKey];

    resultElement.textContent = activeT.resultWrong;
    resultElement.style.color = 'red';

    const mistakeElement = document.getElementById(`mistakeCount-${slot}`);
    if (mistakeElement) mistakeElement.textContent = activeT.mistakeCountLabel(mistakes);

    if (mistakes >= 3) {
        const h1 = document.getElementById(`hint1Btn-${slot}`);
        if (h1) {
            h1.disabled = false;
            h1.classList.add('unlocked');
            h1.textContent = activeT.hint1Unlocked;
        }
    }
    if (mistakes >= 5) {
        const h2 = document.getElementById(`hint2Btn-${slot}`);
        if (h2) {
            h2.disabled = false;
            h2.classList.add('unlocked');
            h2.textContent = activeT.hint2Unlocked;
        }
    }
}

function showHint1(slot) {
    const question = getPairQuestion(slot);
    if (!question) return;
    const id = question.id;
    const attempts = gameState.hint1Attempts[id] || 0;
    const mistakes = gameState[`mistakes_${id}`] || 0;
    if (mistakes < 3 || attempts >= 2) return;

    const box = document.getElementById(`hint1Container-${slot}`);
    if (box) {
        box.textContent = getLocalizedHint(question, 1);
        box.classList.remove('hidden');
    }
    gameState.hint1Attempts[id] = attempts + 1;

    if (gameState.hint1Attempts[id] >= 2) {
        const btn = document.getElementById(`hint1Btn-${slot}`);
        if (btn) {
            btn.disabled = true;
            btn.textContent = (translations[gameState.language] || translations.ja).hint1Maxed;
        }
    }
}

function showHint2(slot) {
    const question = getPairQuestion(slot);
    if (!question) return;
    const id = question.id;
    const attempts = gameState.hint2Attempts[id] || 0;
    const mistakes = gameState[`mistakes_${id}`] || 0;
    if (mistakes < 5 || attempts >= 2) return;

    const box = document.getElementById(`hint2Container-${slot}`);
    if (box) {
        box.textContent = getLocalizedHint(question, 2);
        box.classList.remove('hidden');
    }
    gameState.hint2Attempts[id] = attempts + 1;

    if (gameState.hint2Attempts[id] >= 2) {
        const btn = document.getElementById(`hint2Btn-${slot}`);
        if (btn) {
            btn.disabled = true;
            btn.textContent = (translations[gameState.language] || translations.ja).hint2Maxed;
        }
    }
}

function celebrateCorrectAnswer() {
    const container = document.getElementById('questionScreen');
    if (!container) return;
    for (let i = 0; i < 30; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.backgroundColor = ['#ff3b4e', '#3577f1', '#ffcc33', '#ff6fa5'][Math.floor(Math.random() * 4)];
        confetti.style.animation = `fall ${2 + Math.random() * 1}s linear`;
        container.appendChild(confetti);

        setTimeout(() => confetti.remove(), 3000);
    }
}

// ==========================================
// CODE SUBMISSION
// ==========================================
function isCodeValid(inputCode) {
    const normalizedInput = inputCode.trim().toUpperCase();
    return SHARED_SECRET_CODE.some(code => code.toUpperCase() === normalizedInput);
}

function submitCode() {
    const input = document.getElementById('codeInput');
    const codeInput = input ? input.value.trim() : '';
    const codeResultElement = document.getElementById('codeResult');
    const activeT = translations[gameState.language] || translations.ja;
    if (!codeResultElement) return;

    if (codeInput === '') {
        codeResultElement.textContent = activeT.finalCodeEmpty;
        codeResultElement.style.color = 'orange';
        return;
    }

    if (isCodeValid(codeInput)) {
        codeResultElement.innerHTML = `
            <div class="celebration-banner">
                ${getGameIconSvg('trophy_celebration')}
                <span class="celebration-text">${activeT.finalSuccess}</span>
            </div>
        `;
        codeResultElement.style.color = 'var(--green)';
    } else {
        codeResultElement.textContent = activeT.finalCodeInvalid;
        codeResultElement.style.color = 'red';
    }
}

function submitIntermediateCode() {
    // Guard against button-mashing: ignore new submits while a correct
    // code is already mid-transition to the next screen.
    if (gameState.isCooldown) return;

    const input = document.getElementById('intermediateCodeInput');
    const submitBtn = document.getElementById('intermediateSubmitBtn');
    const codeInput = input ? input.value.trim() : '';
    const codeResultElement = document.getElementById('intermediateCodeResult');
    const activeT = translations[gameState.language] || translations.ja;
    if (!codeResultElement) return;

    if (codeInput === '') {
        codeResultElement.textContent = activeT.intermediateCodeEmpty;
        codeResultElement.style.color = 'orange';
        return;
    }

    if (isCodeValid(codeInput)) {
        gameState.isCooldown = true;
        if (submitBtn) submitBtn.disabled = true;

        codeResultElement.textContent = activeT.intermediateCodeSuccess;
        codeResultElement.style.color = 'green';

        setTimeout(() => {
            if (input) input.value = '';
            codeResultElement.textContent = '';
            gameState.isCooldown = false;
            if (submitBtn) submitBtn.disabled = false;

            if (gameState.pairPage < 3) {
                gameState.pairPage++;
                gameState.currentQuestion = gameState.pairPage * 2;
                gameState.q1Correct = false;
                gameState.stage = 'question';
                showScreen('questionScreen');
                renderQuestionPair();
            } else {
                gameState.stage = 'finalCode';
                showScreen('codeScreen');
                applyLanguageUI();
                const finalPrevEl = document.getElementById('finalPreviousAnswerText');
                if (finalPrevEl) finalPrevEl.textContent = formatPairAnswers();
            }
        }, 1000);
    } else {
        codeResultElement.textContent = activeT.intermediateCodeInvalid;
        codeResultElement.style.color = 'red';
    }
}

// ==========================================
// QR CODE SCANNERS
// ==========================================
function toggleIntermediateQRScanner() {
    const container = document.getElementById('intermediateQrScannerContainer');
    const video = document.getElementById('intermediateQrVideo');
    const canvas = document.getElementById('intermediateQrCanvas');
    const status = document.getElementById('intermediateQrScannerStatus');
    const activeT = translations[gameState.language] || translations.ja;

    if (!container || !video || !canvas) return;

    if (gameState.intermediateQrScannerActive) {
        stopIntermediateQRScanner();
        return;
    }

    container.classList.remove('hidden');
    if (status) status.textContent = activeT.qrStatusAccessing;
    gameState.intermediateQrScannerActive = true;

    navigator.mediaDevices?.getUserMedia({ video: { facingMode: 'environment' } })
        .then((stream) => {
            gameState.intermediateQrScannerStream = stream;
            video.srcObject = stream;
            video.setAttribute('playsinline', true);
            video.play();
            if (status) status.textContent = activeT.qrStatusScanning;

            function scanFrame() {
                if (!gameState.intermediateQrScannerActive) return;
                if (video.readyState === video.HAVE_ENOUGH_DATA) {
                    canvas.height = video.videoHeight;
                    canvas.width = video.videoWidth;
                    const ctx = canvas.getContext('2d');
                    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
                    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
                    if (window.jsQR) {
                        const code = window.jsQR(imageData.data, imageData.width, imageData.height, { inversionAttempts: 'dontInvert' });
                        if (code && code.data) {
                            const input = document.getElementById('intermediateCodeInput');
                            if (input) input.value = code.data;
                            stopIntermediateQRScanner();
                            submitIntermediateCode();
                            return;
                        }
                    }
                }
                requestAnimationFrame(scanFrame);
            }
            requestAnimationFrame(scanFrame);
        })
        .catch((err) => {
            console.error('Camera error:', err);
            if (status) status.textContent = activeT.qrStatusError;
            gameState.intermediateQrScannerActive = false;
        });
}

function stopIntermediateQRScanner() {
    const container = document.getElementById('intermediateQrScannerContainer');
    const video = document.getElementById('intermediateQrVideo');
    if (container) container.classList.add('hidden');
    if (video && video.srcObject) {
        video.srcObject.getTracks().forEach(track => track.stop());
        video.srcObject = null;
    }
    if (gameState.intermediateQrScannerStream) {
        gameState.intermediateQrScannerStream.getTracks().forEach(track => track.stop());
        gameState.intermediateQrScannerStream = null;
    }
    gameState.intermediateQrScannerActive = false;
}

function toggleQRScanner() {
    const container = document.getElementById('qrScannerContainer');
    const video = document.getElementById('qrVideo');
    const canvas = document.getElementById('qrCanvas');
    const status = document.getElementById('qrScannerStatus');
    const activeT = translations[gameState.language] || translations.ja;

    if (!container || !video || !canvas) return;

    if (gameState.qrScannerActive) {
        stopQRScanner();
        return;
    }

    container.classList.remove('hidden');
    if (status) status.textContent = activeT.qrStatusAccessing;
    gameState.qrScannerActive = true;

    navigator.mediaDevices?.getUserMedia({ video: { facingMode: 'environment' } })
        .then((stream) => {
            gameState.qrScannerStream = stream;
            video.srcObject = stream;
            video.setAttribute('playsinline', true);
            video.play();
            if (status) status.textContent = activeT.qrStatusScanning;

            function scanFrame() {
                if (!gameState.qrScannerActive) return;
                if (video.readyState === video.HAVE_ENOUGH_DATA) {
                    canvas.height = video.videoHeight;
                    canvas.width = video.videoWidth;
                    const ctx = canvas.getContext('2d');
                    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
                    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
                    if (window.jsQR) {
                        const code = window.jsQR(imageData.data, imageData.width, imageData.height, { inversionAttempts: 'dontInvert' });
                        if (code && code.data) {
                            const input = document.getElementById('codeInput');
                            if (input) input.value = code.data;
                            stopQRScanner();
                            submitCode();
                            return;
                        }
                    }
                }
                requestAnimationFrame(scanFrame);
            }
            requestAnimationFrame(scanFrame);
        })
        .catch((err) => {
            console.error('Camera error:', err);
            if (status) status.textContent = activeT.qrStatusError;
            gameState.qrScannerActive = false;
        });
}

function stopQRScanner() {
    const container = document.getElementById('qrScannerContainer');
    const video = document.getElementById('qrVideo');
    if (container) container.classList.add('hidden');
    if (video && video.srcObject) {
        video.srcObject.getTracks().forEach(track => track.stop());
        video.srcObject = null;
    }
    if (gameState.qrScannerStream) {
        gameState.qrScannerStream.getTracks().forEach(track => track.stop());
        gameState.qrScannerStream = null;
    }
    gameState.qrScannerActive = false;
}

function resetGame() {
    stopIntermediateQRScanner();
    stopQRScanner();

    const stampTray = document.getElementById('stampTray');
    if (stampTray) {
        stampTray.innerHTML = '';
        stampTray.classList.add('hidden');
    }
    const previousLanguage = gameState.language || 'ja';
    gameState = {
        currentQuestion: 0,
        pairPage: 0,
        q1Correct: false,
        completedQuestions: 0,
        stage: 'menu',
        questionSequence: [],
        mistakesCount: 0,
        hint1Shown: false,
        hint2Shown: false,
        wrongAnswerHistory: {},
        hint1Attempts: {},
        hint2Attempts: {},
        secretCode: SHARED_SECRET_CODE,
        answerLocked: false,
        isCooldown: false,
        language: previousLanguage,
        qrScannerActive: false,
        qrScannerStream: null,
        intermediateQrScannerActive: false,
        intermediateQrScannerStream: null
    };
    applyLanguageUI();
    showScreen('menuScreen');
}

// ==========================================
// INITIALIZATION & EASTER EGGS
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    const languageSelect = document.getElementById('languageSelect');
    if (languageSelect) {
        languageSelect.addEventListener('change', (event) => {
            gameState.language = event.target.value || 'ja';
            applyLanguageUI();
        });
    }
    applyLanguageUI();

    // Easter Egg Setup
    const callout = document.createElement('div');
    callout.id = 'easterEggCallout';
    document.body.appendChild(callout);

    let calloutTimeoutId = null;

    const personaCallouts = {
        en: { standard: ['ANSWERING!', 'IM DOING IT~', 'ARE YOU SURE?', 'LETS GO!'], rare: 'thee does know ze way!' },
        ja: { standard: ['イケイケ！', 'どうだろうな！', '当たってMiiや！', 'せやで～'], rare: 'それちゃうわぼけw' }
    };

    function triggerPersonaHover(target) {
        if (target.classList.contains('btn-hint') && !target.classList.contains('unlocked')) return;

        target.classList.remove('persona-hover');
        void target.offsetWidth;
        target.classList.add('persona-hover');

        const isEn = gameState?.language === 'en' || document.getElementById('languageSelect')?.value === 'en';
        const langConfig = isEn ? personaCallouts.en : personaCallouts.ja;
        const isRare = Math.random() < 0.1;

        let textToShow = isRare ? langConfig.rare : langConfig.standard[Math.floor(Math.random() * langConfig.standard.length)];

        if (isRare) {
            callout.classList.add('rare');
        } else {
            callout.classList.remove('rare');
        }

        callout.textContent = textToShow;

        const rect = target.getBoundingClientRect();
        callout.style.top = `${rect.top - 8}px`;
        callout.style.left = `${rect.left + (rect.width / 2)}px`;

        callout.classList.remove('show');
        void callout.offsetWidth;
        callout.classList.add('show');

        clearTimeout(calloutTimeoutId);
        calloutTimeoutId = setTimeout(() => {
            callout.classList.remove('show');
            callout.classList.remove('rare');
        }, 600);
    }

    document.body.addEventListener('mouseenter', (e) => {
        const target = e.target.closest('.btn-primary, .btn-secondary, .btn-hint, .choice-option, .visual-option');
        if (target) triggerPersonaHover(target);
    }, true);

    document.body.addEventListener('animationend', (e) => {
        if (e.animationName === 'personaSmoothPulse' || e.animationName === 'personaJitter') {
            e.target.classList.remove('persona-hover');
        }
    }, true);
});
