'use client';
import styles from './Posts.module.css';
import { useState } from "react";

export function LikeButton({id}){
    const [liked, setLiked] = useState(false);

    return (
        <button className={styles.likebtn} onClick={() => setLiked(!liked)}>
            {liked ? '💙' : '🖤'}
        </button>
    );
}