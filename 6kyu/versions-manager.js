// https://www.codewars.com/kata/5bc7bb444be9774f100000c3/javascript

// In this kata we are going to mimic a software versioning system.

// You have to implement a vm function returning an object.

// It should accept an optional parameter that represents the initial version. The input will be in one of the following formats: "{MAJOR}", "{MAJOR}.{MINOR}", or "{MAJOR}.{MINOR}.{PATCH}". More values may be provided after PATCH but they should be ignored. If these 3 parts are not decimal values, an exception with the message "Error occured while parsing version!" should be thrown. If the initial version is not provided or is an empty string, use "0.0.1" by default.

// This class should support the following methods, all of which should be chainable (except release):

// major() - increase MAJOR by 1, set MINOR and PATCH to 0
// minor() - increase MINOR by 1, set PATCH to 0
// patch() - increase PATCH by 1
// rollback() - return the MAJOR, MINOR, and PATCH to their values before the previous major/minor/patch call, or throw an exception with the message "Cannot rollback!" if there's no version to roll back to
// release() - return a string in the format "{MAJOR}.{MINOR}.{PATCH}"
// May the binary force be with you!.

const vm = function (initialVersion = "0.0.1") {
  const ver = initialVersion ? initialVersion : "0.0.1";
  let versionParsed = ver.split(".").slice(0, 3);
  if (versionParsed.length < 3) {
    for (let i = 0; i < 3; i++) {
      versionParsed[i] = versionParsed[i] ?? "0";
    }
  }
  versionParsed = versionParsed.join(".");

  const isValidVersion = function (version) {
    return version
      .split(".")
      .map((val) => (val.match(/[0-9]/g) ? true : false))
      .every((val) => val === true);
  };

  if (!isValidVersion(versionParsed))
    throw new Error("Error occured while parsing version!");

  return {
    version: versionParsed.split(".").slice(0, 3).join("."),
    previousVersions: [],
    maj: +versionParsed.split(".")[0],
    min: +versionParsed.split(".")[1],
    pat: +versionParsed.split(".")[2],

    major() {
      this.maj += 1;
      this.min = 0;
      this.pat = 0;
      this.previousVersions.push(this.version);
      this.version = `${this.maj}.${this.min}.${this.pat}`;
      return this;
    },

    minor() {
      this.min += 1;
      this.pat = 0;
      this.previousVersions.push(this.version);
      this.version = `${this.maj}.${this.min}.${this.pat}`;
      return this;
    },
    patch() {
      this.pat += 1;
      this.previousVersions.push(this.version);
      this.version = `${this.maj}.${this.min}.${this.pat}`;
      return this;
    },
    rollback() {
      if (this.previousVersions.length === 0)
        throw new Error("Cannot rollback!");
      this.version = this.previousVersions.pop();
      this.maj = +this.version.split(".")[0];
      this.min = +this.version.split(".")[1];
      this.pat = +this.version.split(".")[2];
      return this;
    },

    release() {
      return this.version;
    },
  };
};
