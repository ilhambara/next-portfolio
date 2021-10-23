import NextLink from "next/link";
import Head from "next/head";
import { ExpCard } from "../components/ExpCard";
import { Box, Flex, Heading, Link } from "@chakra-ui/react";

export default function Experiences() {
	return (
		<>
			<Head>
				<title>Experiences | Next Portfolio</title>
			</Head>

			<Box mb={10}>
				<Heading as="h1" fontSize="4xl">
					Experiences
				</Heading>
			</Box>

			<Box bgColor="#12151d" maxW="800px" borderRadius="5px">
				<ExpCard />
			</Box>

			<Flex alignSelf="flex-end">
				<Box
					fontSize="xl"
					fontWeight="semibold"
					m={4}
					cursor="pointer"
					_hover={{ textDecoration: "underline" }}
				>
					<NextLink href="/">&larr; Home</NextLink>
				</Box>
			</Flex>
		</>
	);
}
