export const projects = [
  {
    id: "digit-classifier",
    number: "01",
    title: "Handwritten Digit Classifier",
    category: "Computer Vision",
    technologies: [
      "PyTorch",
      "NumPy",
      "Tkinter",
      "Matplotlib"
    ],
    description: "Designed and trained a modular Multi-Layer Perceptron (MLP) for classification using a filtered MNIST dataset. Built an interactive GUI supporting real-time digit drawing and confidence-based inference.",
    features: [
      "Custom pipeline including cropping, centering, normalization, and aspect-ratio preservation",
      "Interactive GUI for real-time digit drawing and inference",
      "Integrated optimizers (SGD, Momentum, ADAM) to evaluate maximum accuracy"
    ],
    architecture: ["DRAW", "PREPROCESS", "MLP MODEL", "CONFIDENCE SCORE"],
    github: "https://github.com/Phenesin/Hand-Written-Digit-Classifier"
  },
  {
    id: "art-net",
    number: "02",
    title: "Art Net",
    category: "Computer Vision",
    technologies: [
      "PyTorch",
      "CNN",
      "NumPy",
      "VGG-19"
    ],
    description: "Implemented Neural Style Transfer using selective VGG-19 layers to transfer artistic style while preserving source content. Minimized content loss by carefully isolating layers responsible for structural detail vs. stylistic texture.",
    features: [
      "Content representation and style representation loss optimization",
      "Preserved image aspect ratio via bicubic interpolation",
      "Maintained near-original quality at target output dimensions"
    ],
    architecture: ["SOURCE IMAGE", "STYLE IMAGE", "VGG-19 FEATURES", "OUTPUT IMAGE"],
    github: "https://github.com/Phenesin/ArtNet"
  },
  {
    id: "even-steven",
    number: "03",
    title: "Even Steven: Regularization Analysis",
    category: "Machine Learning",
    technologies: [
      "PyTorch",
      "NumPy",
      "Matplotlib"
    ],
    description: "Built a configurable Multi-Layer Perceptron (MLP) framework for image classification on the Google Quick, Draw! dataset. Evaluated multiple regularization techniques to study overfitting and generalization.",
    features: [
      "Implemented Dropout, L2 Weight Decay, Batch Normalization, and Data Augmentation",
      "Analyzed training and validation curves",
      "Improved test accuracy from 85.04% to 87.14%"
    ],
    architecture: ["DATASET", "REGULARIZATION", "TRAINING/VALIDATION", "87.14% ACCURACY"],
    github: "https://github.com/Phenesin/Even-Steven"
  },
  {
    id: "url-shortener",
    number: "04",
    title: "URL Shortener",
    category: "Backend",
    technologies: [
      "FastAPI",
      "Pydantic",
      "SQLite",
      "SQLAlchemy"
    ],
    description: "Built a RESTful FastAPI backend for a multi-user URL shortening service, with Create, Read, Update, and Delete operations for URLs. Implemented collision-resistant short code generation ensuring one-to-one URL mappings.",
    features: [
      "CRUD operations for URLs",
      "Collision-resistant short code generation",
      "Designed Pydantic schemas and SQLAlchemy models for security"
    ],
    architecture: [
      "REQUEST",
      "FASTAPI",
      "PYDANTIC",
      "SQLALCHEMY",
      "SQLITE"
    ],
    github: "https://github.com/Phenesin/URL-Shortner"
  }
];
