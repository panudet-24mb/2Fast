# serializers.py
from rest_framework import serializers
from .models import Company , Vendor , Job,Project

class CompanySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Company
        fields = ('name', 'alias')