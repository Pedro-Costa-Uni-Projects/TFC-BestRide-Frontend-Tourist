from rest_framework import serializers
from BestRideApi.models import *


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('__all__')