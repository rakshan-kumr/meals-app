# Meals App

The Meals App is a React Native application that allows users to browse meal categories, view meal details, and manage their favorite meals. It uses React Navigation for navigation and context for state management.

## Features

- **Category Browsing**: Explore different meal categories.
- **Meal Details**: View detailed information about meals, including ingredients and preparation steps.
- **Favorites Management**: Add or remove meals from your favorites list.
- **Drawer Navigation**: Navigate between categories and favorites using a drawer menu.

## Project Structure

```
├── App.js                     # Main entry point of the app
├── components/                # Reusable UI components
│   ├── GridScreenTile.js      # Grid tile for categories
│   ├── MealAttributes.js      # Displays meal attributes
│   └── MealDetails/           # Components for meal details
│       ├── IconButton.js      # Custom icon button
│       ├── List.js            # Displays a list of items
│       ├── Subtitle.js        # Subtitle component
│       └── MealList/          # Meal list components
│           ├── MealList.js    # Displays a list of meals
│           └── MealItem.js    # Individual meal item
├── data/                      # Static data for categories and meals
│   └── dummy-data.js          # Dummy data for meals and categories
├── models/                    # Data models
│   ├── category.js            # Category model
│   └── meal.js                # Meal model
├── screens/                   # Screens for navigation
│   ├── CategoriesScreen.js    # Displays meal categories
│   ├── FavoritesScreen.js     # Displays favorite meals
│   ├── MealsDetailsScreen.js  # Displays meal details
│   └── MealsOverviewScreen.js # Displays meals in a category
├── store/                     # State management
│   └── context/
│       └── favourites-context.js # Context for managing favorite meals
├── assets/                    # Static assets (icons, images)
├── package.json               # Project dependencies and scripts
├── babel.config.js            # Babel configuration
└── app.json                   # Expo app configuration
```

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd meals-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

4. Run the app on your desired platform:
   - Android: `npm run android`
   - iOS: `npm run ios`
   - Web: `npm run web`

## Dependencies

The project uses the following key dependencies:

- **React Native**: Framework for building native apps.
- **Expo**: Toolchain for React Native development.
- **React Navigation**: Navigation library for React Native.
- **React Context API**: State management for favorite meals.

For a full list of dependencies, see the [`package.json`](package.json) file.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

This project is part of the Udemy React Native course. Special thanks to the course instructor for the guidance and resources.
