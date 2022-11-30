import styles from '../../Posts.module.css';

const fetchComments = async (id) => {
    //await new Promise(r => setTimeout(r, 3000));

    return await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
        next: {
            revalidate: 60
        }
    })
    .then(res => res.json())
}

export default async function Post({params}){
    const {id} = params;
    const comments = await fetchComments(id)

    return (
        <ul className={styles.comments}>
            {
                comments.map(comment => (
                    <li key={comment.id}>
                        <h2>{comment.name}</h2>
                        <p>{comment.body}</p>
                    </li>
                ))
            }
        </ul>
    );
}