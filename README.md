# Unhandled Exception in Asynchronous Node.js Server

This repository demonstrates a common error in Node.js server development: unhandled exceptions within asynchronous request handlers.

## The Problem

Asynchronous operations (like database queries, network requests, or file I/O) are common in Node.js servers.  If an exception occurs within these asynchronous operations and isn't properly handled, the server might crash without proper logging or graceful shutdown.

## The Code (bug.js)
The `bug.js` file contains a simple HTTP server that simulates an asynchronous operation.  Half the time, it simulates a successful response.  The other half, it throws an exception, causing the server to crash.

## The Solution (bugSolution.js)
The `bugSolution.js` file demonstrates how to correctly handle this exception using a `try...catch` block within the asynchronous operation, or using a `domain` for broader error handling.