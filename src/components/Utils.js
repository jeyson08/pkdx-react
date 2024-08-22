export const customId = (id) => {
  if (id < 10) {
    return "000" + id;
  } else if (id >= 10 && id < 100) {
    return "00" + id;
  } else if (id >= 100 && id < 1000) {
    return "0" + id;
  } else {
    return id;
  }
};

export const getEnglishFlavorText = (flavorTextEntries) => {
  // Filtrer pour obtenir la première entrée avec la langue anglaise
  const englishEntry = flavorTextEntries.find(
    (entry) => entry.language.name === "en"
  );
  return englishEntry
    ? englishEntry.flavor_text
    : "No English flavor text available.";
};
