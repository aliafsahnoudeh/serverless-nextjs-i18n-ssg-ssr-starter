import SinglePostPageContent, { getStaticPathsMethod, getStaticPropsMethod } from "../../../../components/page_contents/posts/[id]";

export default function Local(props) {
	return (
		<SinglePostPageContent { ...props } />
	);
}

export async function getStaticPaths() {
	return await getStaticPathsMethod();
}

export async function getStaticProps({ params }) {
	return await getStaticPropsMethod({ params });
}
