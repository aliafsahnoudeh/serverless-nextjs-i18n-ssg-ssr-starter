import PostsPageContent, { getStaticPaths, getStaticProps } from "../../components/page_contents/posts";

export default function Local(props) {
	return (
		<PostsPageContent { ...props } />
	);
}

export async function getStaticPaths() {
	return await getStaticPaths();
}

export async function getStaticProps({ params }) {
	return await getStaticProps({ params });
}
