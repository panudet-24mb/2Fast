from django.contrib import admin
from .models import Company, Vendor , Job ,Project


admin.site.register(Company)
admin.site.register(Vendor)
admin.site.register(Job)
admin.site.register(Project)