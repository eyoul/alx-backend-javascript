const fs = require('fs');

function constStudents(path) {
  try {
    const fileData = fs.readFileSync(path, 'utf8');
    const lines = fileData.split('\n').filter(line => line !=='');
    const headers = lines[0].split(',');
    const fieldCounts = {};
    for (let i = 1; i < lines.length; i++) {
      const values = lines[i].split(',');
      if (values.length === headers.length) {
        for (let j = 0; j < headers.length; j++) {
          const header = headers[j].trim();
          const value = values[j].trim();

          if (header in fieldCounts) {
            fieldCounts[header].count++;
            fieldCounts[header].students.push(value);
          } else {
            fieldCounts[header] = { count: 1, students: [value]};
          }
        }
      }
    }

    const totalCount = lines.length -1;
    console.log(`Number of students: ${totalCount}`);

    for (const header in fieldCounts) {
      const count = fieldCounts[header].count;
      const students = fieldCounts[header].students.join(',');
      console.log(`Number of students in ${header}: ${count}. List: ${students}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = constStudents;
