# Welcome to StackEdit!

1. npm install
2. npm run dev for start application
3. route main on heroku = 'https://gabrielgrezzana.herokuapp.com'

4. APP.USES
   app.use('/docs', swagger.serve, swagger.setup(swaggerDocs));

app.use('/auth', authRoutes);

app.use('/characters', charactersRoutes);

app.use('/users', usersRoutes);

2. APP.AUTH
   router.post("/login", authControllers.login);

3. APP.CHARACTERS
   router.get('/search', authMiddleware, charactersControllers.searchCharactersController );

router.post('/create', authMiddleware, charactersControllers.createCharactersController );

router.get('/',authMiddleware, charactersControllers.getAllCharactersController );

router.get( '/find/:id', authMiddleware, charactersControllers.findByIdController );

router.put('/update/:id',authMiddleware, charactersControllers.updateCharactersController );

router.delete('/delete/:id', authMiddleware, charactersControllers.deleteCharacterController );
