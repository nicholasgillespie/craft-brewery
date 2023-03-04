// Description: Filter object by allowed fields and remove empty fields
export const filterObject = (reqBody, ...allowedFields) => Object.entries(reqBody)
  .filter(([key, value]) => allowedFields.includes(key) && value)
  .reduce((acc, [key, value]) => {
    acc[key] = value;
    return acc;
  }, {});

// Description: Normalize object values to lowercase and remove extra spaces
export const normalizeData = (data) => Object.entries(data)
  .reduce((acc, [key, value]) => {
    if (Array.isArray(value)) {
      acc[key] = value.map((item) => (typeof item === 'string'
        ? item.trim().toLowerCase().replace(/\s+/g, ' ')
        : item));
    } else if (typeof value === 'string') {
      acc[key] = value.trim().toLowerCase().replace(/\s+/g, ' ');
    } else {
      acc[key] = value;
    }
    return acc;
  }, {});

// Description: Separates values by "," positions them in array, trimming each value
export const separateValues = (value) => value.split(',').map((val) => val.trim());

// Description: Slugify string
export const slugify = (string) => string
  .trim()
  .toLowerCase()
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '')
  .replace(/\s+/g, '-')
  .replace(/[^\w-]+/g, '')
  .replace(/(^-+)|(-+$)/g, '');
