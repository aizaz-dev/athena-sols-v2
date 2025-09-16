"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const frameworks = [
  {
    name: "React",
    logo: "⚛️",
    features: ["Javascript SDK", "Typescript SDK", "Sample project app"],
    code: `import React, { useState } from "react";

const Hello = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Hello React!</h1>
      <p>You clicked {count} times</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default Hello;`,
  },
  {
    name: "Angular",
    logo: "🅰️",
    features: ["Angular SDK", "CLI Support", "Sample Angular Project"],
    code: `import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: \`
    <div style="text-align:center; margin-top:50px;">
      <h1>Hello Angular!</h1>
      <p>You clicked {{count}} times</p>
      <button (click)="increase()">Click Me</button>
    </div>
  \`
})
export class AppComponent {
  count = 0;
  increase() {
    this.count++;
  }
}`,
  },
  {
    name: "Vue.js",
    logo: "🟩",
    features: ["Vue SDK", "Composition API support", "Sample Vue Project"],
    code: `<template>
  <div style="text-align:center; margin-top:50px;">
    <h1>Hello Vue!</h1>
    <p>You clicked {{ count }} times</p>
    <button @click="increase">Click Me</button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const count = ref(0);
const increase = () => {
  count.value++;
};
</script>`,
  },
  {
    name: ".NET",
    logo: "⚙️",
    features: [".NET SDK", "C# Support", "Sample .NET Project"],
    code: `using System;

namespace Example {
  class Program {
    static void Main() {
      int count = 0;
      Console.WriteLine("Hello .NET!");
      Console.WriteLine("Press Enter to increase count...");
      
      while (true) {
        Console.ReadLine();
        count++;
        Console.WriteLine("You clicked {0} times", count);
      }
    }
  }
}`,
  },
  {
    name: "PHP",
    logo: "🐘",
    features: ["PHP SDK", "Composer Package", "Sample PHP Project"],
    code: `<?php
$count = 0;

if(isset($_POST['click'])){
    $count = $_POST['count'] + 1;
}
?>

<html>
  <body style="text-align:center; margin-top:50px;">
    <h1>Hello PHP!</h1>
    <p>You clicked <?php echo $count; ?> times</p>
    <form method="post">
      <input type="hidden" name="count" value="<?php echo $count; ?>">
      <button type="submit" name="click">Click Me</button>
    </form>
  </body>
</html>`,
  },
  {
    name: "Java",
    logo: "☕",
    features: ["Java SDK", "Maven Package", "Sample Java Project"],
    code: `public class Hello {
  public static void main(String[] args) throws java.io.IOException {
    int count = 0;
    System.out.println("Hello Java!");
    System.out.println("Press Enter to increase count...");

    while (true) {
      System.in.read();
      count++;
      System.out.println("You clicked " + count + " times");
    }
  }
}`,
  },
];

export default function FrameworkTabs() {
  const [active, setActive] = useState(frameworks[0]);

  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 lg:px-16 py-10">
      {/* Tabs */}
      <div className="w-full max-w-7xl flex flex-wrap justify-center sm:justify-between gap-4 mb-8">
        {frameworks.map((fw) => (
          <button
            key={fw.name}
            onClick={() => setActive(fw)}
            className={`px-4 sm:px-6 py-2 rounded-full border text-sm sm:text-base transition ${
              active.name === fw.name
                ? "bg-white text-black font-bold"
                : "border-white/50 text-white hover:bg-white/10"
            }`}
          >
            {fw.name}
          </button>
        ))}
      </div>

      {/* Animate Full Content Box */}
      <div className="relative w-full max-w-7xl min-h-[520px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={active.name}
            initial={{ x: 120, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -120, opacity: 0 }}
            transition={{ duration: 0.45 }}
            className="bg-[#1a1a1a] rounded-2xl w-full flex flex-col md:flex-row shadow-lg overflow-hidden absolute"
          >
            {/* Left Section */}
            <div className="flex-1 bg-[#1e1e1e] p-6 sm:p-10 md:p-12 flex flex-col justify-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold flex items-center gap-2">
                <span>{active.logo}</span> {active.name}
              </h2>
              <ul className="mt-6 sm:mt-8 space-y-3 sm:space-y-4 text-base sm:text-lg md:text-xl">
                {active.features.map((f, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-purple-400"
                  >
                    ✔ <span className="text-white">{f}</span>
                  </li>
                ))}
              </ul>
              <div className="flex w-full">
                <button className="mt-6 sm:mt-8 px-4 sm:px-6 py-2 sm:py-3 border border-white/60 rounded-full hover:bg-white hover:text-black transition text-sm sm:text-base md:text-lg ml-auto">
                  Learn more
                </button>
              </div>
            </div>

            {/* Right Section */}
            <div className="flex-1 bg-[#101010] p-4 sm:p-6 md:p-8 overflow-auto">
              <SyntaxHighlighter
                language="javascript"
                style={vscDarkPlus}
                customStyle={{
                  background: "transparent",
                  fontSize: "13px",
                  borderRadius: "12px",
                  padding: "16px",
                  minHeight: "360px",
                }}
              >
                {active.code}
              </SyntaxHighlighter>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
