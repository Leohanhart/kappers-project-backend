

module.exports = app => {
    import swaggerUi from 'swagger-ui-express';
    import YAML from 'yamljs';

    const swaggerDocument = YAML.load('./swagger.YAML');
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
}