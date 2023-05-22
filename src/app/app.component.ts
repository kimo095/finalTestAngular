import { Component } from '@angular/core';

interface FAQ {
  id: number;
  question: string;
  answer: string;
  expanded: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  toggleExpansion(faq: FAQ): void {
    faq.expanded = !faq.expanded;
  }
  faqs: FAQ[] = [
    { id: 1, question: `What is Javascript and what are its features?`,
    answer: `
    JavaScript is a high-level, interpreted programming language that is primarily used for creating interactive web pages. It is often referred to as the "language of the web" as it is widely supported by web browsers and enables client-side scripting. JavaScript allows developers to add dynamic and interactive elements to websites, create web applications, and build server-side applications using frameworks like Node.js.
    and for its features it is include ( Interpretation and Dynamic Typing ,
    Object-Oriented Programming (OOP), Functions as First-Class Citizens ,
    Event-Driven and Asynchronous Programming ,Prototype-based Object Model,
    Dynamic Manipulation of Web Content and finally it is Cross-platform Compatibility: JavaScript is supported by all major web browsers, making it a cross-platform language. It can run on various operating systems and devices, including desktop computers, mobile devices, and embedded systems.
    These features make JavaScript a versatile and widely used programming language for web development, enabling developers to create interactive user experiences and build complex web applications.
    `
    , expanded: true
  },
    { id: 2, question: 'What is CSS and what are its features ?',
    answer: `
    CSS stands for Cascading Style Sheets.
    It is a style sheet language used to describe the presentation and
    styling of a document written in HTML or XML.
    CSS separates the content of a web page from its visual
    representation, allowing developers to control the layout,
    design, and appearance of web pages. and it is forfeatures of CSS
    ( Style and Presentation,Selective Styling , Cascading and Specificity
      , Responsive Design ,  Layout and Box Model ,  Modularity and Reusability
      , Animations and Transitions and  Browser Compatibility).
CSS plays a crucial role in web design, allowing developers to enhance the visual appeal, user experience, and accessibility of web pages. It works in conjunction with HTML and JavaScript to create rich and engaging websites
     `, expanded: false },
    { id: 3, question: 'What is HTML and what are its features ?', answer: `
    HTML (Hypertext Markup Language) is the standard markup language used for creating web pages and web applications. It defines the structure and content of a web page by using a set of markup tags and elements.

Here are some key features of HTML( Semantic Structure,  Text and Media Handling
  Links and Navigation, Forms and User Input , Accessibility Support,Embedding External Content
  Cross-Browser Compatibility,Extensibility and Compatibility
  ).
HTML forms the backbone of web development, providing the basic structure and content of web pages. It works in conjunction with CSS for styling and JavaScript for interactivity, enabling the creation of rich, dynamic, and interactive websites and web applications.


    `,
     expanded: false },
     { id: 4, question: 'What is Angular and what are its main features?', answer: `
     Angular is a popular open-source web application framework developed by Google.
     It is used for building dynamic, scalable, and high-performance web applications. Angular follows the model-view-controller (MVC) architectural pattern and emphasizes a modular and component-based approach to development.
     Here are some key features of Angular(
      TypeScript Language: Angular is built with TypeScript, Component-Based Architecture,
      Two-Way Data Binding,Dependency Injection ,Template Syntax, Routing,Forms,
      Built-in Tooling,Testing Support and Cross-Platform Development).
     These features make Angular a powerful framework for building modern web
     applications. It promotes efficient development practices,
     modular code organization, and high-performance user experiences.
     Angular is widely used by developers and has a large ecosystem of libraries,
      tools, and community support.`,
     expanded: false },
     { id: 5, question: `How typed and non-typed languages differ, so
     Typescript and Javascript as example?`,
     answer: `
     Typed languages and non-typed languages, also known as dynamically typed
     languages, differ in how they handle variable types and type checking.
     TypeScript and JavaScript provide a good example to illustrate these differences:
     JavaScript (Non-typed / Dynamically Typed):
     JavaScript is a dynamically typed language, which means that variable types
     are determined and checked at runtime. In JavaScript, you can assign a value
     of any type to a variable without specifying its type explicitly. On the other
     hand TypeScript (Typed): is a typed superset of JavaScript, which means that it
    extends JavaScript with additional features and enforces static typing.
    TypeScript introduces a compile-time type checking system that allows you to
    explicitly declare the types of variables, function parameters, and return values. This enables early detection of type-related errors during development.
    In summary, the main difference between typed and non-typed languages is
    the presence of static type checking. Typed languages like TypeScript
    enforce type rules at compile-time, catching type errors early and providing
    better code understanding and tooling support. Non-typed languages
    like JavaScript determine variable types at runtime, offering more
    flexibility but potentially leading to runtime errors if types are misused.

`,
     expanded: false }
  ];

  constructor() {
    this.faqs.forEach(faq => faq.expanded = true);
  }
}
