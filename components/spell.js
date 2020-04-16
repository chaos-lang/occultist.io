import fetcher from "../lib/fetcher";
import useSWR from "swr";

function Spell({ name, repo, installs }) {
  const repo_arr = repo.split('/');
  const repo_name = repo_arr[repo_arr.length - 1].split('.')[0];
  const repo_user = repo_arr[repo_arr.length - 2];

  const { data: github_data } = useSWR(`https://api.github.com/repos/${repo_user}/${repo_name}`, fetcher);
  const { data: occultist_json } = useSWR(() => `https://raw.githubusercontent.com/${repo_user}/${repo_name}/${github_data.default_branch}/occultist.json`, fetcher);

  if (!github_data) return <div className="loading"><h3>Loading...</h3></div>
  if (!occultist_json) return <div className="loading"><h3>Loading...</h3></div>

  return (
    <p className="spell">
      <strong>{name}</strong> is {occultist_json.type === 'extension' ? ( <> an extension </> ) : ( <> a spell </> ) } written by <strong>{occultist_json.authors[0].name}</strong>
      &nbsp;and hosted on <a href={github_data.html_url}>{github_data.html_url}</a>. {occultist_json.description} Its lastest version is <strong>{occultist_json.version}</strong>
      &nbsp;The spell <strong>{name}</strong> is installed <strong>{installs}</strong> times and it's licensed under <strong>{occultist_json.license}</strong> - Tags:
      {occultist_json.tags.map((tag, index) => (
          <span>{index === 0 ? (<></>) : (<>, </>)} <strong>{tag}</strong></span>
      ))}
    </p>
  );
}

export default Spell;
