import Link from 'next/link';
import Layout from '../../layout/layout';
import { getAllLanguageSlugs, getLanguage, prependPath } from '../../../lib/lang';
import { useTranslation } from 'react-i18next';
import { getContentData } from '../../../lib/content';
import Date from '../../date/date';
import ListGroup from 'react-bootstrap/ListGroup';

export default function LangIndex({ allPostsData, language }) {
	const { t } = useTranslation();
	return (
		<Layout fluid={false}>
			<ListGroup>
				{allPostsData.map(({ id, date, title }) => (
					<ListGroup.Item key={id}>
						<Link href={prependPath(`/posts/${id}`)} as={prependPath(`/posts/${id}`)}>
							<a>{title}</a>
						</Link>
						<br />
						<small className="text-dark">
							<Date dateString={date} />
						</small>
					</ListGroup.Item>
				))}
			</ListGroup>
		</Layout>
	);
}

export async function getStaticPaths() {
	const paths = getAllLanguageSlugs();
	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	const allPostsData = getContentData('posts');
	const language = getLanguage(params.lang);
	return {
		props: {
			allPostsData,
			language,
		},
	};
}
