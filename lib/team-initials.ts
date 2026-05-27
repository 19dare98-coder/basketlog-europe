const SPECIAL_TEAM_INITIALS: Record<string, string> = {
  "Real Madrid": "RMA",
  "Fenerbahçe": "FEN",
  Fenerbahce: "FEN",
  "Crvena zvezda": "CZV",
  Partizan: "PAR",
  Panathinaikos: "PAN",
  Olympiacos: "OLY",
  "Anadolu Efes": "EFS",
  "Bayern Munich": "BAY",
  Barcelona: "BAR",
  "Valencia Basket": "VAL",
  "Paris Basketball": "PARIS",
  "Virtus Bologna": "VIR",
  Monaco: "ASM",
  "Žalgiris": "ZAL",
  Zalgiris: "ZAL",
  "Maccabi Tel Aviv": "MTA",
  Baskonia: "BAS",
  "Alba Berlin": "ALB",
  "Olimpia Milano": "MIL"
};

function stripDiacritics(value: string) {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

export function getTeamInitials(teamName: string) {
  const trimmedName = teamName.trim();

  if (SPECIAL_TEAM_INITIALS[trimmedName]) {
    return SPECIAL_TEAM_INITIALS[trimmedName];
  }

  const normalizedName = stripDiacritics(trimmedName);
  if (SPECIAL_TEAM_INITIALS[normalizedName]) {
    return SPECIAL_TEAM_INITIALS[normalizedName];
  }

  const words = normalizedName
    .replace(/[^\w\s-]/g, " ")
    .split(/[\s-]+/)
    .filter(Boolean);

  if (words.length === 0) {
    return "TEAM";
  }

  if (words.length === 1) {
    return words[0].slice(0, 3).toUpperCase();
  }

  return words
    .slice(0, 3)
    .map((word) => word[0].toUpperCase())
    .join("");
}
