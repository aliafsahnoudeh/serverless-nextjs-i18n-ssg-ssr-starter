import AboutPageContent, { getStaticPathsMethod, getStaticPropsMethod } from "../../../components/page_contents/about";

export default function Local(props) {
	return (
		<AboutPageContent { ...props } />
	);
}

export async function getStaticPaths() {
	return await getStaticPathsMethod();
}

export async function getStaticProps({ params }) {
	return await getStaticPropsMethod({ params });
}
