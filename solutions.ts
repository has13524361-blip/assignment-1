
const multiplyValue = (value: number, multiplier?: number): number => {
    return value * (multiplier ?? 2);
};

const processInput = (input: string | number | boolean): string | number => {
    if (typeof input === "string") {
        return input.trim().toLowerCase();
    }

    if (typeof input === "number") {
        return input * 10;
    }

    if (input === true) {
        return "Active";
    }

    return "Inactive";
};

const formatCoordinate = (
    coordinate: readonly [number, number, string]
): string => {
    const [latitude, longitude, locationName] = coordinate;

    return `Location: ${locationName} (${latitude}, ${longitude})`;
};

function concatenateArrays<T>(...arrays: T[][]): T[] {
    const result: T[] = [];

    for (const currentArray of arrays) {
        for (const item of currentArray) {
            result.push(item);
        }
    }

    return result;
}

interface Course {
    title: string;
    students: number;
    isPublished: boolean;
}

function getPopularCourses(
    courses: Course[],
    minStudents: number
): Course[] {
    return courses.filter((course: Course): boolean => {
        return course.isPublished === true &&
            course.students >= minStudents;
    });
}
