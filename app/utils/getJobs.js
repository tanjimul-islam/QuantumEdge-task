export async function getJobs() {
  const res = await fetch(`https://api.mnimedu.com/api/browse/pro-jobs/`);
  if (!res.ok) {
    throw new Error(`Fetching Error!`);
  }
  return res.json();
}
