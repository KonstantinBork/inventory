package com.inventory.app

import com.inventory.cms.Media
import com.inventory.cms.MediaPlatform
import grails.plugin.springsecurity.annotation.Secured

@Secured("ROLE_USER")
class UserController {

    UserService userService
    def springSecurityService

    def index() {
        render(view: "/app/pages/user")
    }

    // TODO Rewrite for AJAX call
    def addMedia() {
        User user = springSecurityService.isLoggedIn() ? springSecurityService.getCurrentUser() : null
        if (user) {
            boolean added = userService.addMedia(user, getMediaPlatform(params.mediaType as String), params.mediaId as String)
            if (added) {
                render(view: "/app/pages/user")
            } else {
                // TODO render error page
                "A"
            }
        }
    }

    // TODO Rewrite for AJAX call
    def removeMedia() {
        User user = springSecurityService.isLoggedIn() ? springSecurityService.getCurrentUser() : null
        if (user) {
            boolean deleted = userService.removeMedia(user, getMediaPlatform(params.mediaType as String), params.mediaId as String)
            if (deleted) {
                render(view: "/app/pages/user")
            } else {
                // TODO render error page
                ""
            }
        }
    }

    def showMedia() {
        User user = springSecurityService.isLoggedIn() ? springSecurityService.getCurrentUser() : null
        if (user) {
            Map<String, Media> media = userService.getUserMedia(user)
            render(view: "/app/pages/show", model: media)
        }
    }

    private MediaPlatform getMediaPlatform(String mediaType) {
        switch (mediaType) {
            case "book":
                return MediaPlatform.BOOK
            case "movie":
                return MediaPlatform.MOVIE
            case "music":
                return MediaPlatform.MUSIC
            case "videogame":
                return MediaPlatform.VIDEOGAME
            default:
                return null
        }
    }

}