const args = process.argv.slice(2);

for (let i = 0; i < args.length; i++) {
  const numbers = Number(args[i]);
  if (!isNaN(numbers)) {
    if (numbers > 0) {
      setTimeout(() => {
        process.stdout.write("\x07");
      }, numbers * 1000);
    }
  }
}
