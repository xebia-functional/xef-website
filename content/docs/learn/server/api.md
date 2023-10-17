---
id: server-api
title: API
sidebar_position: 1
---

Xef server provides a compatible OpenAI REST API. By default, it will use the `api.openai.com` as the backend.

# API Specification

TODO

# Change the API backend

Xef server allow you to specify different API backends to be used when interacting with the server. This is managed using two configuration
parameters:

* `ai-routes.aiProvider`: Overriden with the environment variable `XEF_AI_PROVIDER`. Determines the API backend
* `ai-routes.baseUri`: Overriden with the environment variable `XEF_AI_PROVIDER_URI`. Determines the base URI for the API backend


## OpenAI API compatible

To change the API backend by a different compatible OpenAI server you need to change the `ai-routes.baseUri` configuration by passing 
the new URI. This can be easily done by overriding the environment variable `XEF_AI_PROVIDER_URI`.

Example:

```bash
export XEF_AI_PROVIDER_URI=http://localhost:8000
```

## MLflow gateway

Xef server has built-in support for [MLflow gateway](https://mlflow.org/docs/latest/gateway/index.html). Through this integration, Xef users can 
still interact with Xef server using a compatible OpenAI and their request will be redirected to MLflow gateway.

In order to use MLflow gateway you need to specify `MLflow` for the AI provider and also the URL.

Example:

```bash
export XEF_AI_PROVIDER=MLflow
export XEF_AI_PROVIDER_URI=http://localhost:5000
```