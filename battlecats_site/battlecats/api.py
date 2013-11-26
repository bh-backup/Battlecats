from tastypie.authorization import Authorization
from tastypie.resources import ModelResource
from tastypie import fields

from battlecats.models import CatProfile

from django.contrib.auth import get_user_model
User = get_user_model()

class UserResource(ModelResource):
    class Meta:
        queryset = User.objects.all()
        resource_name = 'user'
        excludes = ['password',]
        allowed_methods = ['get']

class CatProfileResource(ModelResource):
    user = fields.ForeignKey(UserResource, 'user')

    class Meta:
        queryset = CatProfile.objects.all()
        resource_name = 'catprofile'
        authorization= Authorization()

