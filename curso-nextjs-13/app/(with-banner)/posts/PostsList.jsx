import styles from './Posts.module.css';
import {LikeButton} from './LikeButton';
import Link from 'next/link';

//incremental static regeneration
const fetchPosts = () => {
    return fetch('https://jsonplaceholder.typicode.com/posts', {
        next: {
            revalidate: 60
        }
    })
    .then(res => res.json());
}

export async function PostsList(){
    const posts = await fetchPosts();

    return posts.slice(0,5).map(post => (
                <article className={styles.post} key={post.id}>
                    <Link href='/posts/[id]' as={`/posts/${post.id}`}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                        <LikeButton id={post.id} />
                    </Link>
                </article>
            ));
}