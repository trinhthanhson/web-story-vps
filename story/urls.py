from django.urls import path

from story.views.hotline_views import terms_view
from . import views
from django.contrib.auth import views as auth_views

urlpatterns = [
    path("", views.home, name="home"),
    path('doc/<slug:story_slug>/', views.story_detail, name='story_detail'),
    path("categories/<slug:category_slug>/", views.category_detail, name="category_detail"),
    path('doc/<slug:story_slug>/<chapter_number>/', views.chapter_detail, name='chapter_detail'),
    path("banner-data/", views.home_banner, name="banner_data"),
    path("stories/", views.story_list, name="stories"),  # <--- Dùng tên 'stories',
    path(
        "categories/", views.category_list, name="categories"
    ),  
    path("register/", views.register_view, name="register"),
    path("login/", views.login_view, name="login"),
    path(
        "password_reset/",
        auth_views.PasswordResetView.as_view(
            template_name="story/account/password_reset_form.html"
        ),
        name="password_reset",
    ),
    path(
        "password_reset/done/",
        auth_views.PasswordResetDoneView.as_view(
            template_name="story/account/password_reset_done.html"
        ),
        name="password_reset_done",
    ),
    path(
        "reset/<uidb64>/<token>/",
        auth_views.PasswordResetConfirmView.as_view(
            template_name="story/account/password_reset_confirm.html"
        ),
        name="password_reset_confirm",
    ),
    path(
        "reset/done/",
        auth_views.PasswordResetCompleteView.as_view(
            template_name="story/account/password_reset_complete.html"
        ),
        name="password_reset_complete",
    ),
    path("search_results/", views.search_results, name="search_results"),
    path("accounts/profile/", views.profile_view, name="profile"),
    path("accounts/profile/edit/", views.profile_edit_view, name="profile_edit"),
    path("logout/", views.custom_logout_view, name="logout"),
    path('favorite/<slug:story_slug>/', views.toggle_favorite, name='toggle_favorite'),
    path('contact/', views.hotline_views, name='hotline'),
    path('terms/', terms_view, name='terms'),
]
