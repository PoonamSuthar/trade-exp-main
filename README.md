# CSV to MongoDB API
This project implements a Node.js API that accepts a CSV file as input, parses the data, and stores it in a MongoDB database. Additionally, it provides an API to retrieve the asset-wise balance of the account at any given timestamp.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Deployment](#deployment)

## Features

- Accepts a CSV file containing trade data and stores it in a MongoDB database.
- Provides an API to get the asset-wise balance of the account at any given timestamp.

## Prerequisites

Before begin, ensure the following requirements:

- Node.js and npm installed on machine.
- MongoDB Atlas account or a local MongoDB instance.
- Render account for deployment.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/PoonamSuthar/trade-exp-main.git
   cd trade-exp-main
2. Install the dependencies.

## Usage
1. **Upload CSV**: Use the API to upload CSV file containing trade data.[KoinX Assignment CSV Sample.csv](https://github.com/PoonamSuthar/trade-exp-main/files/15447224/KoinX.Assignment.CSV.Sample.csv)
2. **Retrieve Balance**: Query the API to get the balance of assets at any specific time.


## Deployment

Deploy this API on Render:

1. **Create a Render Account**: Sign up on Render's website.
2. **Deploy the Service**: Follow Render's instructions to create a new web service and connect GitHub repository.
3. **Set Up Environment**: Configure the necessary environment variables, including MongoDB connection string.
4. **Access API**: Once deployed, use the URL provided by Render to access API.

<https://trade-exp-main.onrender.com/api/trades>

