import AboutPageContent, { getStaticPaths, getStaticProps } from "../../components/page_contents/about";

export default function Local(props) {
	return (
		<AboutPageContent { ...props } />
	);
}

export async function getStaticPaths() {
	return await getStaticPaths();
}

export async function getStaticProps({ params }) {
	return await getStaticProps({ params });
}
