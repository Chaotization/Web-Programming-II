import {ObjectId} from "mongodb";
import {GraphQLError} from "graphql";

const genres = {
    POP: 'pop',
    ROCK: 'rock',
    HIP_HOP: 'hip_hop',
    COUNTRY: 'country',
    JAZZ: 'jazz',
    CLASSICAL: 'classical',
    ELECTRONIC: 'electronic',
    R_AND_B: 'r_and_b',
    INDIE: 'indie',
    ALTERNATIVE: 'alternative'
};
export const checkId = (id) => {
    if (!id) {
        throw new GraphQLError(`No id is provided`,
            {
                extensions: {code: 'BAD_USER_INPUT'}
            });
    }
    if (typeof id !== "string" || id.trim().length === 0) {
        throw new GraphQLError(`The id provided must be a non-empty string`,
            {
                extensions: {code: 'BAD_USER_INPUT'}
            }
        );
    }
    id = id.trim()
    if (!ObjectId.isValid(id)) {
        throw new GraphQLError(`Invalid Object ID`,
            {
                extensions: {code: 'BAD_USER_INPUT'}
            });
    }
    return id;
};

export const checkGenre = (genre) => {
    if (!genre) {
        throw new GraphQLError(`No genre is provided`, {extensions: {code: 'BAD_REQUEST'}});
    }
    if (typeof genre !== 'string' || genre.trim().length === 0) {
        throw new GraphQLError(`The genre provided must be a non-empty string`, {extensions: {code: 'BAD_REQUEST'}});
    }
    if (!Object.keys(genres).includes(genre.trim())) {
        throw new GraphQLError(`Please provide a valid genre`, {extensions: {code: 'BAD_REQUEST'}});
    }
    return genre.trim();
};

export const checkYear = (min, max) => {
    if (!min || !max) {
        throw new GraphQLError('Either no min or max provided', {extensions: {code: 'BAD_REQUEST'}})
    }
    if (typeof Number.parseInt(min) !== 'number' || typeof Number.parseInt(max) !== 'number') {
        throw new GraphQLError('Either min or max is not number', {extensions: {code: 'BAD_REQUEST'}})
    }
    if (min < 1900 || max <= min || max > 2025) {
        throw new GraphQLError('Invalid min/max values, available range between 1900 to 2025', {extensions: {code: 'BAD_REQUEST'}});
    }
    return {min, max};
};

export const checkFoundedYear = (year) => {
    if (!year) {
        throw new GraphQLError('Either no founded year provided', {extensions: {code: 'BAD_REQUEST'}})
    }
    if (typeof Number.parseInt(year) !== 'number') {
        throw new GraphQLError('Provided founded year is not number', {extensions: {code: 'BAD_REQUEST'}})
    }
    if (year < 1900 || year >= 2025) {
        throw new GraphQLError('Invalid founded year values, available range between 1900 to 2025', {extensions: {code: 'BAD_REQUEST'}});
    }
    return year;
};

export const checkString = (name, valName) => {
    if (!name) {
        throw new GraphQLError(`No ${valName} provided`,
            {
                extensions: {code: 'BAD_USER_INPUT'}
            })
    }

    if (typeof name !== 'string' || name.trim().length === 0) {
        throw new GraphQLError(`The ${valName} must be a non-empty string`,
            {
                extensions: {code: 'BAD_USER_INPUT'}
            })
    }

    const regex = /^[a-zA-Z\s]+$/;
    if (!regex.test(name.trim())) {
        throw new GraphQLError(`The ${valName} must contain only alphabetic characters`,
            {
                extensions: {code: 'BAD_USER_INPUT'}
            });
    }

    return name.trim().toLowerCase();
};

export const checkDate = (date) => {
    if (!date) {
        throw new GraphQLError('No date provided')
    }

    if (typeof date !== 'string' || date.trim().length === 0) {
        throw new GraphQLError('Date must be a non-empty string',
            {
                extensions: {code: 'BAD_USER_INPUT'}
            }
        );
    }

    const [month, day, year] = date.split('/').map(part => parseInt(part, 10));
    if (isNaN(month) || isNaN(day) || isNaN(year)) {
        throw new GraphQLError('Invalid date format',
            {
                extensions: {code: 'BAD_USER_INPUT'}
            });
    }

    if (month < 1 || month > 12) {
        throw new GraphQLError('Invalid month',
            {
                extensions: { code: 'BAD_USER_INPUT' }
            });
    }

    if (day < 1 || day > 31) {
        throw new GraphQLError('Invalid day',
            {
                extensions: { code: 'BAD_USER_INPUT' }
            });
    }

    if (year < 1900 || year > 2025) {
        throw new GraphQLError('Invalid year',
            {
                extensions: { code: 'BAD_USER_INPUT' }
            });
    }

    const isValidDate = new Date(year, month - 1, day).getDate() === day;
    if (!isValidDate) {
        throw new GraphQLError('Invalid date',
            {
                extensions: {code: 'BAD_USER_INPUT'}
            });
    }

    return date;
};

export const checkArray = (elem) => {
    if (elem === undefined || elem === null) {
        throw new GraphQLError('At least one member',
            {
                extensions: {code: 'BAD_USER_INPUT'}
            });
    }
    if(elem.trim.length === 0){
        return "";
    }
    if (typeof elem !== 'string' || !/^[a-zA-Z]+$/.test(elem.trim())) {
        throw new GraphQLError('Name must contain only alphabetic characters (a-z)',
            {
                extensions: {code: 'BAD_USER_INPUT'}
            });
    }
    return elem.trim().toLowerCase();
};

export const checkDuration = (duration) => {
    if (!duration) {
        throw new GraphQLError('No duration provided')
    }

    if (typeof duration !== 'string' || duration.trim().length === 0) {
        throw new GraphQLError('Duration must be a non-empty string',
            {
                extensions: {code: 'BAD_USER_INPUT'}
            }
        );
    }

    const durationRegex = /^\d{2}:\d{2}$/;
    if (!durationRegex.test(duration)) {
        throw new GraphQLError('Duration must be in the format "MM:SS"',
            {
                extensions: {code: 'BAD_USER_INPUT'}
            }
        );
    }
    const [minutes, seconds] = duration.split(':').map(part => parseInt(part, 10));

    if (minutes >= 60 || seconds >= 60) {
        throw new GraphQLError('Duration cannot exceed 59 minutes and 59 seconds',
            {
                extensions: {code: 'BAD_USER_INPUT'}
            }
        );
    }
    return duration.trim();
};

