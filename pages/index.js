import Link from 'next/link';

import Layout from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import Date from '../components/date';

import utilStyles from '../styles/utils.module.css';

export async function getStaticProps() {
    const allPostData = getSortedPostsData()
    return {
        props: {
            allPostData
        }
    }
}


export default function Home({ allPostData }) {
    return (
        <Layout home>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>Blog</h2>
                <ul className={utilStyles.list}>
                    {allPostData.map(({id, date, title}) => (
                        <li className={utilStyles.listItem} key={id}>
                            <Link href={`/posts/${id}`}>{title}</Link>
                            <br />
                            <small className={utilStyles.lightText}>
                                <Date dateString={date} />
                            </small>
                        </li>
                    ))}
                </ul>
            </section>
        </Layout>
    );
}