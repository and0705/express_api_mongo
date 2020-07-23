const router = require('express').Router();

// set default API response
router.get('/', (req, res) => {
  res.json({
    status: 'API works',
    message: 'Welcome to resfulapi',
  });
});

// import contact controller
const contactController = require('./contactController');

// Contact routes
router
  .route('/contacts')
  .get(contactController.index)
  .post(contactController.new);

router
  .route('/contacts/:contact_id')
  .get(contactController.view)
  .patch(contactController.update)
  .put(contactController.update)
  .delete(contactController.delete);

module.exports = router;
