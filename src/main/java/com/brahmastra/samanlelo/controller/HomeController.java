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
        model.addAttribute("title","Saman Lelo");
        return "index";
    }

    @RequestMapping("/grocery")
    public String grocery(Model model){
        model.addAttribute("title","Grocery");
        return "grocery";
    }

    @RequestMapping("/grocery1")
    public String grocery1(Model model){
        model.addAttribute("title","Grocery1");
        return "grocery1";
    }

    @RequestMapping("/product")
    public String product(Model model){
        model.addAttribute("title","Product");
        return "product";
    }

    @RequestMapping("/pantry")
    public String pantry(Model model){
        model.addAttribute("title","Pantry");
        return "pantry";
    }

    @RequestMapping("/fruits")
    public String fruits(Model model){
        model.addAttribute("title","Fruits");
        return "fruits";
    }

    @RequestMapping("/vegetables")
    public String vegetables(Model model){
        model.addAttribute("title","Vegetables");
        return "vegetable";
    }

    @RequestMapping("/dairy")
    public String dairy(Model model){
        model.addAttribute("title","Dairy");
        return "dairy";
    }

    @RequestMapping("/frozenFood")
    public String frozenFood(Model model){
        model.addAttribute("title","Frozen Food");
        return "frozenFood";
    }

    @RequestMapping("/login")
    public String login(Model model){
        model.addAttribute("title","Log In");
        return "login";
    }

    @RequestMapping("/user/profile")
    public String profile(Model model){
        model.addAttribute("title","Profile");
        return "profile";
    }

    @RequestMapping("/user/cart")
    public String checkout(Model model){
        model.addAttribute("title","Cart");
        return "checkout";
    }

    @RequestMapping("/user/billing")
    public String billing(Model model){
        model.addAttribute("title","Billing");
        return "billing";
    }

    @RequestMapping("/user/currentOrder")
    public String currentOrder(Model model){
        model.addAttribute("title","Current Order");
        return "currentOrder";
    }

    @RequestMapping("/user/previousOrder")
    public String previousOrder(Model model){
        model.addAttribute("title","Previous Order");
        return "previousOrder";
    }
}