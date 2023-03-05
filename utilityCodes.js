/**
 * *This function sorts an array of objects by a key value. The key value can be a date, string, or
 * number.*
 * @returns The sorted array.
 */
const sortArrayOfObjects = (
  arrayToSort,
  keyToSortOn,
  valueType,
  isDescendingSort = false
) => {
  let placeHolderArray = [...arrayToSort];
  switch (valueType) {
    case "dateTime":
      placeHolderArray.sort((a, b) => {
        keyToSortOn.forEach((key) => {
          a = a[key];
          b = b[key];
        });
        const timestampA = new Date(a).getTime();
        const timestampB = new Date(b).getTime();
        return timestampA < timestampB ? -1 : 1;
      });
      break;
    case "string":
      placeHolderArray.sort((a, b) => {
        keyToSortOn.forEach((key) => {
          a = a[key];
          b = b[key];
        });
        return a.toLowerCase() < b.toLowerCase() ? -1 : 1;
      });
      break;
    case "number":
      placeHolderArray.sort((a, b) => {
        keyToSortOn.forEach((key) => {
          a = a[key];
          b = b[key];
        });
        return parseFloat(a) < parseFloat(b) ? -1 : 1;
      });
      break;

    default:
      break;
  }
  if (isDescendingSort) {
    return placeHolderArray.reverse();
  }
  return placeHolderArray;
};

/**
 * * Convert the string to lowercase.
 * * Replace any character that is followed by a (space|.|!|?) with the same character, but in uppercase
 * @param [currentString] - The string to be converted to sentence case.
 * @returns The original string, but with the first letter of each sentence capitalized.
 * @tags sentence case, lower case, convert,
 */
const getSentenceCasedString = (currentString = "") => {
  return currentString
    .toString()
    .toLowerCase()
    .replace(/(^\s*\w|[\.\!\?]\s*\w)/g, function (c) {
      return c.toUpperCase();
    });
};

/**
 * Check if the bottom of an element is within 5 pixels of the bottom of the window
 * @param [element=null] - The element to check. If not specified, the body element is used.
 * @returns A boolean value.
 */
const hasElementScrollReachedBottom = (element = null) => {
  let scrollTop = 0;
  if (!element) {
    scrollTop = window.pageYOffset;
    element = document.querySelector("body");
  } else {
    scrollTop = element.scrollTop;
  }
  return (
    Math.abs(element.clientHeight - (element.scrollHeight - scrollTop)) < 5
  );
};

/**
 * For each key in the object, if the value is an object, then recursively call the function on the
 * value, otherwise, just assign the value to the new object.
 * @param [obj] - The object to be copied.
 * @returns A function that takes an object as an argument and returns a deep copy of that object.
 * TODO: Another case to copy objects in the arrays.
 */
const deepCopy = (obj = {}) => {
  let returnValue = {};
  for (const key in obj) {
    const currentValue = obj[key];
    if (typeof currentValue == "object" && !Array.isArray(currentValue)) {
      returnValue[key] = deepCopy(currentValue);
    } else {
      returnValue[key] = currentValue;
    }
  }
  return returnValue;
};

// Flatten nested objects:
// Tags: object, flatten, flat,
{
  let nestedOBj = {
    doorNo: 97,
    street: {
      name: "taj mahal road",
      number: 361,
      postal: {
        first: 91563,
        last: 6734,
        more_nested: {
          wtf: "cant help",
          why: "oops",
        },
      },
    },
    area: "KN",
    city: "BLR",
    state: "KA",
    neww_obj: {
      arr: ["a", "b", "c"],
    },
  };

  let flattenedObj = {};

  Object.keys(nestedOBj).forEach((eachKey) => {
    flattenedObj = flattenObject(eachKey, nestedOBj, flattenedObj);
  });

  function flattenObject(key, obj = {}, flattenedObj = {}, prefixString = "") {
    if (typeof obj[key] != "object") {
      flattenedObj[prefixString + key] = obj[key];
    } else if (!(obj[key] instanceof Array)) {
      Object.keys(obj[key]).forEach((eachKey) => {
        flattenedObj = flattenObject(
          eachKey,
          obj[key],
          flattenedObj,
          prefixString + key + "_"
        );
      });
    } else {
      flattenedObj[prefixString + key] = obj[key];
    }
    return flattenedObj;
  }

  Object.keys(flattenedObj).forEach((eachKey) => {
    console.log(eachKey + " => " + flattenedObj[eachKey]);
  });
}

// Replace multiple placeholders in a string:	Replaces those three values in the option for all the sub-categories.
// Tags: regex, replace multiple, replaceAll, string, substring, sub string,
{
  function populateSubCategoryOptions() {
    let subCategoryList = [
      {
        guid: 123,
        parent_guid: 987,
        name: "hello1",
      },
      {
        guid: 456,
        parent_guid: 369,
        name: "hello2",
      },
    ];
    let filteredOptionList = "initial string";
    let subCategoryOptionTemplate = `<option value=":GUID" parent-guid=":PARENT_GUID">:NAME</option>`;
    subCategoryList.forEach((optionData) => {
      let dataMap = {
        ":GUID": optionData["guid"],
        ":PARENT_GUID": optionData["parent_guid"],
        ":NAME": optionData["name"],
      };
      let tempOption = subCategoryOptionTemplate.replace(
        /:GUID|:NAME|:PARENT_GUID/g,
        (eachMatch) => dataMap[eachMatch]
      );
      filteredOptionList += tempOption;
    });
    return filteredOptionList;
  }
}

// Delete multiple properties from object. JS
// Tags: delete properties in a loop,
{
  const deleteObjectProperties = (
    parentObject = {},
    propertiesToDelete = []
  ) => {
    propertiesToDelete.forEach((property) => {
      delete parentObject[property];
    });
    return parentObject;
  };
}

// Get key by value of an object. JS
// Tags: get key of an object, get key from value
{
  const getKeyByValue = (object, value) => {
    return Object.keys(object).find((key) => object[key] === value);
  };
}

// Valdiate email. JS
// Tags: email validation, validate,
{
  const validateEmail = (emailAddress) => {
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return !!emailAddress.match(regexEmail);
  };
}

// To prevent date selection in input type=date. This will not allow date selection of past dates
// Tags: limit date, prevent past date selection, disable past dates, days, input date, restrict past dates,
{
  ("<input type='date' min={new Date().toISOString().split('T')[0]} />");
}

// To display base64 image data in html
// Tags: base64 image convert to image, img, data,
{
  ("<img src={`data:image/jpeg;base64,<long_string_here>`} />");
}

// To get base64 version of image (may be any file?)
// Tags: convert image to base64,
{
  const getBase64StringOfImage = (imageFile) => {
    return new Promise((resolve, reject) => {
      let base64String = "";
      if (!!imageFile) {
        const reader = new FileReader();
        reader.readAsDataURL(imageFile);
        reader.onload = function () {
          base64String = reader.result;
          resolve(base64String);
        };
        reader.onerror = function (error) {
          console.log("Error at image to base64 conversion..");
          reject(error);
        };
      }
    });
  };
}

// To get day name from date string:
// Tags: get day name from date string, weekday
{
  function getDayName(dateInDDMMYYYY) {
    return new Intl.DateTimeFormat("en-Us", { weekday: "long" }).format(
      new Date(dateInDDMMYYYY)
    );
  }
  console.log(getDayName("08/08/1996"));
}

// To deep copy an object:
// Tags: deep copy, object, nested object
{
  const deepCopy = (obj = {}) => {
    let returnValue = {};
    for (const key in obj) {
      const currentValue = obj[key];
      if (typeof currentValue == "object" && !Array.isArray(currentValue)) {
        returnValue[key] = deepCopy(currentValue);
      } else {
        returnValue[key] = currentValue;
      }
    }
    return returnValue;
  };
}

// To remove consecutive duplicates:
{
  function removeConsecutiveDups(str) {
    let uniqueStr = "";
    let lastChar;
    str.split("").forEach((ch) => {
      if (ch != lastChar) {
        uniqueStr += ch;
      }
      lastChar = ch;
    });

    return uniqueStr;
  }
  console.log(removeConsecutiveDups("aabbaaaaa"));
}

// To get css property values in js:
{
  function css(element, property) {
    return window.getComputedStyle(element, null).getPropertyValue(property);
  }
  css(object, "font-size"); // returns '16px'..
}

// To capitalise first letter of a string:
{
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
}

// To reverse the words in a sentence:
{
  function reverseWordsInSentence(sentence) {
    let signMap = {};
    let split = sentence
      .split(" ")
      .map((eachWord, index) => {
        let signs = eachWord.match(/[^a-zA-Z0-9]/gi);
        if (signs) {
          signMap[signs.join("")] = index;
        }
        return eachWord;
      })
      .reverse()
      .map((eachWord) => {
        return eachWord.replace(/[^a-zA-Z0-9]/gi, "");
      })
      .map((ew, index) => {
        if (Object.values(signMap).includes(index)) {
          ew += Object.keys(signMap).find((key) => signMap[key] === index);
        }
        return ew;
      });
    split[split.length - 1] =
      split[split.length - 1].match(/[a-zA-Z0-9]/gi).length > 1
        ? split[split.length - 1].toLowerCase()
        : split[split.length - 1];
    split = split.join(" ");
    return split.charAt(0).toUpperCase() + split.slice(1);
  }

  console.log(reverseWordsInSentence("How are you today?"));
  console.log(reverseWordsInSentence("I visited Ethiopia last year."));
  console.log(reverseWordsInSentence("Hurray!"));
}

// To accept only 0-9 inputs: ^[0-9]*$
{
  if (!inputValue.match(/^[0-9]*$/g)) {
    validationMessage = "Please enter a number.";
  }
}

// Set cursor at the end of text area input:
{
  element.focus();
  element.setSelectionRange(element.value.length, element.value.length);
}

//	API call abstraction:
{
  // GENERIC API CALLING METHOD.
  const callApi = (api, method, body = {}, headers = {}) => {
    let fetchOptions = {
      method,
      headers,
    };

    if (method.toLowerCase() !== "get") {
      fetchOptions["body"] = JSON.stringify(body);
    }

    return new Promise((resolve, reject) => {
      fetch(`${api}`, fetchOptions)
        .then((response) => {
          return response.json();
        })
        .then((responseData) => {
          resolve(responseData);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  // USAGE:
  const getCallStatus = async (agentId, callSid) => {
    const method = "POST";
    const headers = {
      accept: "application/json",
      "content-type": "application/json",
    };
    const body = {
      agentId: agentId,
      callSid: callSid,
    };
    return await callApi(
      `${backendDomain}/v1/twilio/verify-call-status`,
      method,
      body,
      headers
    );
  };
}

//	Common validator:
{
  const validate = (config = {}, data = {}) => {
    console.log("common validator");
    let result = { isValid: true, error: {} };

    for (const field in config) {
      const validations = config[field];
      //	If error found in one validation, do not check further validations for the same field. So break fieldsLoop;
      fieldsLoop: for (const validation in validations) {
        const validationConfig = validations[validation];
        switch (validation) {
          case "required":
            if (
              validationConfig &&
              (data[field] === undefined || data[field].length == 0)
            ) {
              const errorMessage = validationMessages.required[field];
              result["isValid"] = false;
              result.error[field] = errorMessage;
              break fieldsLoop;
            } else {
              if (data[field] === undefined) {
                break fieldsLoop;
              }
            }
            break;

          case "minLength":
            if (data[field] && data[field].length < validationConfig) {
              const errorMessage = validationMessages.minLength[field].replace(
                ":MIN_LENGTH",
                config[field][validation]
              );
              result["isValid"] = false;
              result.error[field] = errorMessage;
              break fieldsLoop;
            }
            break;

          case "maxLength":
            if (data[field] && data[field].length > validationConfig) {
              const errorMessage = validationMessages.maxLength[field].replace(
                ":MAX_LENGTH",
                config[field][validation]
              );
              result["isValid"] = false;
              result.error[field] = errorMessage;
              break fieldsLoop;
            }
            break;

          case "min":
            if (data[field] !== undefined && data[field] < validationConfig) {
              const errorMessage = validationMessages.min[field].replace(
                /:MIN|:MAX/g,
                (m) => {
                  return config[field][m.substring(1).toLowerCase()];
                }
              );
              result["isValid"] = false;
              result.error[field] = errorMessage;
              break fieldsLoop;
            }
            break;
          case "max":
            if (data[field] !== undefined && data[field] > validationConfig) {
              const errorMessage = validationMessages.max[field].replace(
                /:MIN|:MAX/g,
                (m) => {
                  return config[field][m.substring(1).toLowerCase()];
                }
              );
              result["isValid"] = false;
              result.error[field] = errorMessage;
              break fieldsLoop;
            }
            break;

          case "regex":
            if (data[field] && !data[field].match(validationConfig)) {
              const errorMessage =
                validationMessages.regex[field] ||
                validationMessages.regex["generic"];
              result["isValid"] = false;
              result.error[field] = errorMessage;
              break fieldsLoop;
            }
            break;

          default:
            break;
        }
      }
    }

    console.log(">> | file: common.js:83 | result:", result);
    return result;
  };

  //	Usage:
  function validateUserInputForAddCategory(data = {}) {
    console.log("validateUserInputForAddCategory");

    const config = {
      name: {
        required: true,
        minLength: 3,
        maxLength: 64,
      },
      description: {
        required: false,
        minLength: 12,
        maxLength: 64,
      },
      parentCategory: {
        required: false,
        minLength: 3,
        maxLength: 64,
      },
      categoryType: {
        required: false,
        minLength: 3,
        maxLength: 64,
      },
    };

    return commonUtilities.validate(config, data);
  }
}
