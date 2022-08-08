# icy.tools Nuxt Example

[Nuxt.js](https://v3.nuxtjs.org/) is a Vue metaframework.

## Outline

* [Setup](#setup)
  * [Clone Scaffold Repo and Install Dependencies](#clone-scaffold-repo-and-install-dependencies)
  * [Get API Key](#get-api-key)
  * [Copy Environment Variable Sample](#copy-environment-variable-sample)
  * [Start Development Server](#start-development-server)
  * [Live Example](#live-example)

## Setup

[`icytools-scaffold`](https://github.com/quiknode-labs/icytools-scaffold/) is a monorepo containing different frontend applications that accesses the [developers.icy.tools](https://developers.icy.tools/) through GraphQL requests.

### Clone Repo and Install Dependencies

Clone the repo, navigate to this project's directory, and install your dependencies.

```bash
git clone https://github.com/quiknode-labs/icytools-scaffold.git
cd icytools-scaffold/icytools-nuxt
yarn
```

### Get API Key

You can start using the icy.tools [public GraphQL API](https://graphql.icy.tools/playground) immediately without an API key. However, we recommend [getting an API key](https://docs.icy.tools/developer-api/access) for higher rate limits. You can sign up for a free account and view more guides and examples at [developers.icy.tools](https://developers.icy.tools/).

### Copy Environment Variable Sample

Run the following command to create a new `.env` file using the sample provided.

```bash
cp .env.sample .env
```

### Start Development Server

```bash
yarn dev
```

### Live Example

Visit [icytools-nuxt.vercel.app](https://icytools-nuxt.vercel.app/) to see a running example of this application deployed on Vercel.