wget -O src/graphql/schema.json https://raw.githubusercontent.com/themeetinghouse/web/master/src/graphql/schema.json

cd src/graphql && amplify codegen types && cd ../services/graphql && amplify codegen types