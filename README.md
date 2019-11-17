# Paf frontend exercise

Translate the provided [designs (for small & large viewports)](#designs) into a working solution with HTML, CSS and JavaScript.

## Requirements

- Introduce meaning to the various elements.
- Load the JSON-data and use it to render the lists.
- Solution works in modern browsers and viewport-widths ranging from 320-1920px.

_You are allowed to make adjustments to the design/layout if needed._

## File structure

```bash
index.html          # The place to author your HTML.
src/styles.css      # The place to author your CSS.
src/scripts.js      # The place to author your JavaScript.
dist/data.js        # The JSON-data to load & use in your JavaScript.
```

## Loading data

The JSON-data is requested from the following url:
```
./data.json
```

<br id="designs">

## Designs

### Small viewports

![Small viewports](./design/small-viewports.png)

### Large viewports

![Large viewports](./design/large-viewports.png)

<br id="development-setup">

## Development setup

Work on your solution in a [codesandbox](https://codesandbox.io/s/github/johanwestling/paf-frontend-exercise/tree/master/?fontsize=14&hidenavigation=1&theme=dark) or use the provided localhost setup.

_**Note:** You'll need **Git** and **Node.js** v10 (or higher) installed for the provided localhost setup to function._

```bash
# Clone paf-frontend-exercise.
git clone https://github.com/johanwestling/paf-frontend-exercise.git

# Change directory to where you cloned paf-frontend-exercise.
cd paf-frontend-exercise

# Start the localhost server.
npm start
```

