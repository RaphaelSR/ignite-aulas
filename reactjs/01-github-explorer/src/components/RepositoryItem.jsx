export function RepositoryItem({repository}){
    return (
        <li>
        <strong>{repository.name ?? 'unform'}</strong>
        <p>{repository.description ?? 'default'}</p>
        <a href="">{repository.link ?? 'default'}</a>
    </li>
    );
}