export const groupEventsByDate = (array) => {
  const userTimeZoneOffset = new Date().getTimezoneOffset();

  const groupedFixtures = array.reduce((grouped, fixture) => {
    const date = new Date(fixture.fixture.date);

    // Adjust the date based on the user's timezone offset
    const adjustedDate = new Date(date.getTime());

    const dateKey = adjustedDate.toISOString().split("T")[0]; // Format the adjusted date

    if (!grouped[dateKey]) {
      grouped[dateKey] = [];
    }

    // Create a new object with the adjusted date key
    const adjustedFixture = { ...fixture, adjustedDateKey: adjustedDate };

    grouped[dateKey].push(adjustedFixture);

    return grouped;
  }, {});

  const arrayOfArrays = Object.values(groupedFixtures).sort(
    (a, b) => a[0].adjustedDateKey - b[0].adjustedDateKey
  );

  return arrayOfArrays;
};
