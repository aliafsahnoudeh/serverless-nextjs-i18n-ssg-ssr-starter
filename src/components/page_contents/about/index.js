import Head from 'next/head';
import Layout from '../../layout/layout';
import { getAllLanguageSlugs, getLanguage, prependPath } from '../../../lib/lang';
import { getItemData } from '../../../lib/content';
import { useTranslation } from 'react-i18next';

export default function Local({ language, pageData }) {
	const { t } = useTranslation();
	return (
		<Layout>
			<Head>
				<title>{pageData.title}</title>
			</Head>
			<div dangerouslySetInnerHTML={{ __html: pageData.contentHtml }} />
		</Layout>
	);
}

export async function getStaticPathsMethod() {
	const paths = getAllLanguageSlugs();
	return {
		paths: paths,
		fallback: false,
	};
}

export async function getStaticPropsMethod({ params }) {
	const pageData = await getItemData('content', 'about');
	const language = getLanguage(params.lang);
	return {
		props: {
			pageData,
			language,
		},
	};
}
