import { getByPlaceholderText, render,screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"

//test case 1
// test('Contact page is loading or not',()=>{
//     render(<Contact/>);

//     const heading=screen.getByRole('heading');

//     //assertion
//     expect(heading).toBeInTheDocument();
// });

// //test case 2
// test('should button be loading inside contact component',()=>{
//     render(<Contact/>);

//     const button = screen.getByRole('button');

//     //Assertion
//     expect(button).toBeInTheDocument(); 
// });

// //test case 3
// test('name input box should load inside contact component',()=>{
//     render(<Contact/>);

//     const input = screen.getByPlaceholderText("name");

//     //assertion
//     expect(input).toBeInTheDocument();
// })

// //test case 4
// test('should load 2 input box',()=>{
//     render(<Contact/>);

//     const inputBoxes = screen.getAllByRole('textbox');

//     //assertion
//     expect(inputBoxes.length).toBe(2); 
// })


//If we want to group these test cases
describe('Contact Us test cases',()=>{
    test('Contact page is loading or not',()=>{
        render(<Contact/>);
    
        const heading=screen.getByRole('heading');
    
        //assertion
        expect(heading).toBeInTheDocument();
    });
    
    //test case 2
    test('should button be loading inside contact component',()=>{
        render(<Contact/>);
    
        const button = screen.getByRole('button');
    
        //Assertion
        expect(button).toBeInTheDocument(); 
    });
    
    //test case 3
    test('name input box should load inside contact component',()=>{
        render(<Contact/>);
    
        const input = screen.getByPlaceholderText("name");
    
        //assertion
        expect(input).toBeInTheDocument();
    })
    
    //test case 4
    test('should load 2 input box',()=>{
        render(<Contact/>);
    
        const inputBoxes = screen.getAllByRole('textbox');
    
        //assertion
        expect(inputBoxes.length).toBe(2); 
    })
})
