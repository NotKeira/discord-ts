/**
 * @Object rawColours - The raw colours to use for the logger
 */
const rawColours: Record<string, any> = {
  darkRed: "e[38;5;1m",
  darkGreen: "e[38;5;2m",
  darkYellow: "e[38;5;3m",
  darkBlue: "e[38;5;4m",
  darkMagenta: "e[38;5;5m",
  darkCyan: "e[38;5;6m",
  darkWhite: "e[38;5;7m",
  darkGrey: "e[38;5;8m",
  lightRed: "e[38;5;9m",
  lightGreen: "e[38;5;10m",
  lightYellow: "e[38;5;11m",
  lightBlue: "e[38;5;12m",
  lightMagenta: "e[38;5;13m",
  lightCyan: "e[38;5;14m",
  lightWhite: "e[38;5;15m",
  orange: "e[38;5;208m",
  deepPink: "e[38;5;198m",
  violet: "e[38;5;93m",
};

/**
* @Object colours - The colours to use for the logger
*/
const colours: Record<string, any> = {
  ...rawColours,
  Events: {
    Ready: rawColours.lightGreen,
    Message: rawColours.lightBlue,
    Warn: rawColours.orange,
    Error: rawColours.lightRed,
    Debug: rawColours.lightYellow,
    Info: rawColours.lightWhite,
    Command: rawColours.lightMagenta,
    Database: rawColours.deepPink,
  },
  Reset: rawColours.lightWhite,
  Bold: "e[1m",
  Underline: "e[4m",
};

const originalConsole = { ...console };

/**
 * @param {string} message - The message to colour
 * @returns {string} - The coloured message
 */
function colour(message: string): string {
  return message
    .replace(/\[(.*?)\]/g, (_, match) => colours[match] || match)
    .replace(/\{(.*?)\}/g, (_, match) => colours[match] || match);
}

console.log = function (message: string, ...args: any[]): void {
  originalConsole.log(colour(message), ...args);
};

console.warn = function (message: string, ...args: any[]): void {
  originalConsole.warn(colour(message), ...args);
};

console.error = function (message: string, ...args: any[]): void {
  originalConsole.error(colour(message), ...args);
};

console.info = function (message: string, ...args: any[]): void {
  originalConsole.info(colour(message), ...args);
};

console.debug = function (message: string, ...args: any[]): void {
  originalConsole.debug(colour(message), ...args);
};
