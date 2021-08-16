/*   Created by IntelliJ IDEA.
 *   Author: Devvrat Sharma (devrats)
 *   Date: 16-Aug-21
 *   Time: 11:13 AM
 *   File: HomeController.java
 */

package com.brahmastra.samanlelo.controller;


import org.springframework.stereotype.Component;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@Component
public class HomeController {

    @RequestMapping("/")
    public String home(Model model){
        model.addAttribute("title","Home");
        return "index";
    }

    @RequestMapping("/checkout")
    public String checkout(Model model){
        model.addAttribute("title","Check Out");
        return "checkout";
    }
}